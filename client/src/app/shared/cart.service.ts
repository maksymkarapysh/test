import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {

  private ordersInCart: Array<any>;
  public subject = new Subject()
  constructor(private http: HttpClient) {
    this.ordersInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  }

  public getOrders(): Observable<{}> {
    let orders: Observable<any> = Observable.create((observer) => {
      observer.next(JSON.parse(localStorage.getItem('cart')));
      observer.complete();
    })
    return orders;
  }

  public addToOrders(product) {
    if (this.ordersInCart.some((item) => item._id == product._id)) {
      this.ordersInCart.forEach(item => {
        if (item._id == product._id) {
          item.quantity += 1;
        }
      });
    } else {
      this.ordersInCart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(this.ordersInCart));

    return new Observable((observer) => {
      observer.next();
      observer.complete();
    })
  }

  public deleteItemOrder(itemOrder): Observable<{}> {

    this.ordersInCart = this.ordersInCart.filter(item => item._id != itemOrder._id); 

    return Observable.create((observer) => {
      observer.next(localStorage.setItem('cart', JSON.stringify(this.ordersInCart)));
      observer.complete();
    })
  }


}
