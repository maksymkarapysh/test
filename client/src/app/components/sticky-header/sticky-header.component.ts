import { Component, OnInit, Output, EventEmitter, AfterViewChecked, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../../shared/basket.service';

@Component({
  selector: 'nut-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit {

  @Output() makeVisibleBasket = new EventEmitter<any>();
  private quantityOrders: number;

  constructor(private router: Router, private basketService: BasketService) {
    this.quantityOrders = 0;
   }

  ngOnInit() {
  
  }
  ngOnChanges() {
    console.log('after cont checked');
     this.getQuintityOrders();
  }

  private redirectToMainPage() {
    this.router.navigate(['']);
  }

  getQuintityOrders() {
    this.basketService.getOrders().subscribe(quantity => { this.quantityOrders = quantity.count})
  }

  private openBasket() {
    this.makeVisibleBasket.emit(true);
  }
}
