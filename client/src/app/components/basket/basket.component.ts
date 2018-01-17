import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../shared/basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nut-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  private orders;
  private sumPrice: number = 0;
  private quantityOrders:number = 0;

  constructor(private basketService: BasketService,private router: Router ) { }

  ngOnInit() {
    this.getOrders();
  }

  private getOrders() {
    this.basketService.getOrders().subscribe(getAllOrders => {
      
      this.orders = getAllOrders;
      this.quantityOrders = (getAllOrders as any).length
      this.orders.forEach(item => {
        this.sumPrice += item.quantity * item.product.price;
      });

    })
  }

  private goToItemProduct(order)  {
    this.router.navigate(["item", order.product._id] )
  }
}
