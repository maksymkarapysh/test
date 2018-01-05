import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../shared/basket.service';

@Component({
  selector: 'nut-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  private orders;
  private sumPrice: number = 0;
  private quantityOrders:number = 0;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.getOrders();
  }

  private getOrders() {
    this.basketService.getOrders().subscribe(getAllOrders => {
      
      this.orders = getAllOrders.orders;
      this.quantityOrders = getAllOrders.count
      this.orders.forEach(item => {
        this.sumPrice += item.quantity * item.product.price;
      });

    })
  }
}
