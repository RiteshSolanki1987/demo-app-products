import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductUseCase } from '../../home/repository/product.usecase';
import { Product } from '../../home/entities/products.model';
import { ConfirmDialogModel, ConfirmComponent } from '../../../ui-kit/confirm/confirm.component';
import { NotificationComponent } from '../../../ui-kit/notification/notification.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  public arrProducts: Array<Product> = [];
  public arrAllProducts: Array<Product> = [];
  public durationInSeconds: number = 5;
  public message: string = '';

  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar, private productUseCase: ProductUseCase) { }

  /**
   * Component Initilization
   */
  ngOnInit(): void {
    this.listProducts();
  }

  /**
   * Function to load list of products
   */
  listProducts = () => {
    this.productUseCase.getAll().then((res) => {
      if (res && res.length > 0) {
        const data: Array<Product> = JSON.parse(res) || [];
        this.arrAllProducts = [...data];
        this.arrProducts = data.filter(x => x.isDisplay === false);
      }
    }).catch(error => {
      console.error('error', error);
    });
  }

  /**
   * Function to ask for confirmation while restore product
   */
  restoreProductConfirm = (productId: number) => {
    const message = `Are you sure you want to restore?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.restoreProduct(productId);
      }
    });
  }

  /**
   * Function to restore product
   */
  restoreProduct = (productId: number) => {
    this.arrAllProducts.forEach(element => {
      if (element.id === productId) {
        element.isDisplay = true;
        this.message = 'Product restored successfully.';
        this.removeLocalStorage();
      }
    });
  }

  /**
   * Function to update localStorage
   */
  removeLocalStorage = () => {
    this.productUseCase.remove('products').then(res => {
      this.openSnackBar(this.message);
      this.updateLocalStorage();
    }).catch(error => {
      this.openSnackBar('Something went wrong. Please try again later.');
    });
  }

  /**
   * Function Update Local Storage
   */
  updateLocalStorage = () => {
    this.productUseCase.update('products', JSON.stringify(this.arrAllProducts)).then(res => {
      this.listProducts();
    }).catch(error => {
      this.openSnackBar('Something went wrong. Please try again later.');
    });
  }

  /**
   * Function to confirm remove product
   */
  removeProductConfirm = (productId: number) => {
    const message = `Are you sure you want to completely remove this product?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.removeProduct(productId);
      }
    });
  }

  /**
   * Function to remove product completely
   */
  removeProduct = (productId: number) => {
    const productIndex: number = this.arrAllProducts.findIndex(x => { return x.id === productId });
    if (productIndex !== -1) {
      this.arrAllProducts.splice(productIndex, 1);
      this.message = 'Product completely removed from the system successfully.';
      this.removeLocalStorage();
    }
  }


  /**
   * Function to display notifications
   */
  openSnackBar = (message): void => {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right'
      data: message
    });
  }

  /**
   * Function to get back to product list
   */
  backToList = (id: string) => {
    this.router.navigate([`/home/`]);
  }
}