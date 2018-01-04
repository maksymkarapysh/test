import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product';
import { Router } from '@angular/router';

@Component({
  selector: 'nut-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

 private getProducts() {
    this.productService.getProducts().subscribe(getProducts => {
      this.products = getProducts; 
    })
  }

  private goToItemProduct(product) {
    console.log(product)
    this.router.navigate(["item", product._id] )
  }
}
