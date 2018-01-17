import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/product';
import { ProductService } from '../../shared/product.service';
import { CartService } from '../../shared/cart.service';

@Component({
	selector: 'nut-item-product',
	templateUrl: './item-product.component.html',
	styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {

	public currentProduct: Product;

	constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router, private cartService: CartService) { }

	public ngOnInit() {
		let id = this.activatedRoute.snapshot.params["id"];

		this.productService.getProduct(id).subscribe(getProduct => {
			this.currentProduct = getProduct;
		})
	}

	public linkOnMyself() {
		this.router.navigate(['item', this.currentProduct._id]);
	}

	addToBasket(product) {
		let order = {
			...product,
			quantity: 1
		};
		this.cartService.addToOrders(order).subscribe(() => {
			this.cartService.subject.next(); // to update basket count of Orders
		})
	}
}

