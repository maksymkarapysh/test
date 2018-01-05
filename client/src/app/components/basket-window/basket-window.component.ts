import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { BasketService } from '../../shared/basket.service';

@Component({
  selector: 'nut-basket-window',
  templateUrl: './basket-window.component.html',
  styleUrls: ['./basket-window.component.scss']
})
export class BasketWindowComponent implements OnInit, DoCheck {

  @Output() hideBasket = new EventEmitter();
  private orders;
  private sumPrice: number = 0;
  constructor(private basketService: BasketService, private router: Router) { }

  ngOnInit() {
    this.getOrders();
  }

  ngDoCheck() {
    // console.log(this.doVisibleBasket);
    // this.getOrders();
  }

  public closeBasket() {
    this.hideBasket.emit(false);
  }

  private getOrders() {
    this.basketService.getOrders().subscribe(getAllOrders => {
      this.orders = getAllOrders.orders;
      console.log(this.orders);
      this.orders.forEach(item => {
        this.sumPrice += item.quantity * item.product.price;
      });

    })
  }

  private deleteItemOrder(itemOrder) {
    this.basketService.deleteItemOrder(itemOrder).subscribe(() => { this.getOrders() });
  }

  private redirectToBasketPage() {
      this.router.navigate(["basket"]);
      this.hideBasket.emit(false);
  }
  // ngOnDestroy() {

  // }
}