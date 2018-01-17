import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../shared/cart.service';

@Component({
    selector: 'nut-basket-window',
    templateUrl: './basket-window.component.html',
    styleUrls: ['./basket-window.component.scss']
})
export class BasketWindowComponent implements OnInit, DoCheck {

    @Output() hideBasket: EventEmitter<any> = new EventEmitter();
    private orders;
    private sumPrice: number = 0;
    constructor(private cartService: CartService, private router: Router) { }

    ngOnInit() {
        this.getOrders();
    }

    ngDoCheck() {
    }

    public closeBasket() {
        this.hideBasket.emit(false);
    }

    closedBasket(event) {
        if (event.target.className === 'basketWindow') {
            this.hideBasket.emit(false);
        }
    }


    private getOrders() {

        this.cartService.getOrders().subscribe((getAllOrders) => {
            this.orders = getAllOrders;
            console.log(this.orders);
            this.sumPrice = 0;
            this.orders.forEach((item) => {
                this.sumPrice += item.quantity * item.price;
            })
        }, (err) => console.log(err))
    }

    private deleteItemOrder(itemOrder) {
        this.cartService.deleteItemOrder(itemOrder).subscribe(() => {
            this.cartService.subject.next();
            this.getOrders();
        })
    }

    private redirectToBasketPage() {
        this.router.navigate(["basket"]);
        this.closeBasket();
    }

    private goToItemProduct(order) {
        this.router.navigate(["item", order._id])
        this.closeBasket();
    }
}
