import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { BasketService } from '../../shared/basket.service';

@Component({
  selector: 'nut-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, DoCheck {

  @Output() hideBasket = new EventEmitter();
  private orders;
  private sumPrice: number = 0;
  constructor(private basketService: BasketService) { }

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

  // private getSum
  // ngOnDestroy() {

  // }
}
