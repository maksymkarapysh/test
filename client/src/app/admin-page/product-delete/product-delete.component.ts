import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../shared/product';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'nut-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  public currentProduct: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    if (id) {
      this.productService.getProduct(id).subscribe(product => {
        this.currentProduct = product;
      })
    }
  }

  deleteProduct() {
    this.productService.deleteProduct(this.currentProduct)
      .subscribe(() => this.goBack());
  }

  private goBack() {
    this.router.navigate(["admin"]);
  }

}
