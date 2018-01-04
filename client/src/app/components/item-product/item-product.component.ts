import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/product';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'nut-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {

  public currentProduct: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

   public ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];

    this.productService.getProduct(id).subscribe( getProduct => {
      this.currentProduct = getProduct;
      console.log(this.currentProduct)
    })
  }

  public linkOnMyself() {
    this.router.navigate(['item', this.currentProduct._id]);
  }


}
