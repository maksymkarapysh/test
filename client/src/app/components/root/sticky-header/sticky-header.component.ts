import { Component, OnInit, Output, EventEmitter, AfterViewChecked, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../shared/cart.service';

@Component({
	selector: 'nut-sticky-header',
	templateUrl: './sticky-header.component.html',
	styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit {

	@Output() makeVisibleBasket = new EventEmitter<any>();
	private quantityOrders: number;

	constructor(private router: Router, private cartService: CartService) {
		this.quantityOrders = 0;
		this.cartService.subject.subscribe(() => this.getQuintityOrders())
	}

	ngOnInit() {
		this.getQuintityOrders();
	}

	private redirectToMainPage() {
		this.router.navigate(['']);
	}

	getQuintityOrders() {
		this.cartService.getOrders().subscribe(quantity => { this.quantityOrders = (<any>quantity).length });
	}

	private openBasket() {
		this.makeVisibleBasket.emit(true);
	}
}
