import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductUseCase } from '../repository/product.usecase';
import { Product } from '../entities/products.model';
import { ConfirmDialogModel, ConfirmComponent } from '../../../ui-kit/confirm/confirm.component';
import { NotificationComponent } from '../../../ui-kit/notification/notification.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public arrProducts: Array<Product> = [];
  public arrAllProducts: Array<Product> = [];
  public arrOriginalProducts: Array<Product> = [];
  public searchByName: string = '';
  public durationInSeconds: number = 5;

  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar, private productUseCase: ProductUseCase) { }

  /**
   * Initilization Component
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
        this.arrProducts = data.filter(x => x.isDisplay === true);
        this.arrOriginalProducts = [...this.arrProducts];
      }
    }).catch(error => {
      this.openSnackBar('Something went wrong. Please try again later.');
    });
  }

  /**
   * Function to use search product list
   */
  searchProduct = () => {
    if (this.searchByName && this.searchByName.trim().length > 0) {
      const arrProduct = this.arrProducts.length > 0 ? [...this.arrProducts] : [...this.arrOriginalProducts];
      const data = arrProduct.filter((obj) => {
        return obj.title.toLowerCase().indexOf(this.searchByName.toLowerCase()) > -1
      });
      this.arrProducts = [...data];
    } else if (this.searchByName === '') {
      this.arrProducts = [...this.arrOriginalProducts];
    }
  }

  /**
   * Function to confirm remove product
   * @params productId Product Id 
   */
  removeProductConfirm = (productId: number) => {
    const message = `Are you sure you want to remove?`;
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
   * Function to remove product
   */
  removeProduct = (productId: number) => {
    this.arrAllProducts.forEach(element => {
      if (element.id === productId) {
        element.isDisplay = false;
        this.removeLocalStorage();
      }
    });
  }

  /**
   * Function to update localStorage
   */
  removeLocalStorage = () => {
    this.productUseCase.remove('products').then(res => {
      this.openSnackBar('Product has been removed successfully from the list.');
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
   * 
   */
  addToFavourite = () => {
    this.openSnackBar('Products has been added to favourite list.');
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
   * Function to navigate to details page
   * @param id Product Id
   */
  navigateToDetails = (id: string) => {
    this.router.navigate([`/home/`, id]);
  }
}
