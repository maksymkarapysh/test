import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BasketService {

  private urlConnectString: string;

  constructor(private http: HttpClient) {
    this.urlConnectString = 'http://localhost:3000/orders'
  }

  public getOrders(): Observable<any> {
    return this.http.get(this.urlConnectString);
  }

  public getProduct(id: string): Observable<any> {
    return this.http.get(this.urlConnectString + "/" + id)
  }

  public deleteItemOrder(itemOrder): Observable<any> {
    return this.http.delete(this.urlConnectString + "/" + itemOrder._id)
  }

  public addProduct(product: Product) {
    return this.http.post(this.urlConnectString, product);
  }

}
