import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nut-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit {

  @Output() makeVisibleBasket = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private redirectToMainPage() {
    this.router.navigate(['']);
  }

  private openBasket() {
    this.makeVisibleBasket.emit(true);
  }
}
