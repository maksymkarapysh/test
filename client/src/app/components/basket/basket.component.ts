import { Component, OnInit, Input , DoCheck} from '@angular/core';

@Component({
  selector: 'nut-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, DoCheck {

  @Input() visible;
  //private visible = true;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    // console.log(this.doVisibleBasket);
  }

}
