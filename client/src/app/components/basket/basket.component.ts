import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'nut-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

	private orders;
	private sumPrice: number = 0;
	private quantityOrders: number = 0;

	constructor(private cartService: CartService, private router: Router) {
		this.cartService.subject.subscribe(() => this.getOrders());
	}

	ngOnInit() {
		this.getOrders();
	}

	private getOrders() {
		this.cartService.getOrders().subscribe(getAllOrders => {

			this.orders = getAllOrders;
			this.quantityOrders = (getAllOrders as any).length;
			this.sumPrice = 0;
			this.orders.forEach(item => {
				this.sumPrice += item.quantity * item.price;
			});

		})

	}


	private changeQuantityItem(object, count) {
		this.orders.forEach(item => {
			if (item._id == object._id) {
				if (count == 'plus') item.quantity = ++item.quantity;
				else if (count == 'minus') item.quantity = --item.quantity;
				else item.quantity = count;
			}
		});
		localStorage.setItem('cart', JSON.stringify(this.orders));
		this.getOrders();
	}

	private goToItemProduct(order) {
		this.router.navigate(["item", order._id])
	}
}
