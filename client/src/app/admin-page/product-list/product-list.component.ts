import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../shared/product';
import { ProductService } from '../../shared/product.service';


@Component({
  selector: 'nut-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }


  private getProducts() {
    this.productService.getProducts().subscribe(productsIN => { this.products = productsIN });
  }

  private refresh() {
    this.getProducts();
  }

  public editProduct(product: Product) {
    this.router.navigate(["admin", "edit", product._id]);
  }

  public deleteProduct(product: Product) {
    this.router.navigate(["admin", "delete", product._id]);
  }

  public createProduct() {
    this.router.navigate(["admin", "create"]);
  }
}
