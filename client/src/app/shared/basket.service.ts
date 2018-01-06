import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BasketService {

  private urlConnectString: string;
  public subject = new Subject()
  constructor(private http: HttpClient) {
    this.urlConnectString = 'http://localhost:3000/orders'
  }

  public getOrders(): Observable<any> {
    return this.http.get(this.urlConnectString);
  }

  public addToOrders(product): Observable<any> {
    return this.http.post(this.urlConnectString, product);
  }

  public deleteItemOrder(itemOrder): Observable<any> {
    return this.http.delete(this.urlConnectString + "/" + itemOrder._id)
  }

 

}
