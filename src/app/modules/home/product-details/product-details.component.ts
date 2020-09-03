import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductUseCase } from '../../home/repository/product.usecase';
import { Product } from '../../home/entities/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public productId: number = 0;
  public arrProducts: Array<Product> = [];
  public objProduct: Product = new Product();

  constructor(private route: ActivatedRoute, private router: Router, private productUseCase: ProductUseCase) {
    //TODO:
  }

  /**
   * Initilization component
   */
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params.id;
      this.getProductDetails(this.productId);
    });

  }

  /**
   * Function to get product details
   */
  getProductDetails = (id: number) => {
    this.productUseCase.getAll().then((res) => {
      if (res && res.length > 0) {
        const data: Array<Product> = JSON.parse(res) || [];
        this.objProduct = data.filter(x => x.id == id)[0];
      }
    }).catch(error => {
      console.error('error', error);
    });
  }

  /**
   * Function to get back to product list
   */
  backToList = () => {
    this.router.navigate([`/home/`]);
  }

}
