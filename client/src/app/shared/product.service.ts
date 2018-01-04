import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  private urlConnectString: string;

  constructor(private http: HttpClient) {
    this.urlConnectString = 'http://localhost:3000/products'
  }

  public getProducts(): Observable<any> {
    return this.http.get(this.urlConnectString);
  }

  public getProduct(id: string): Observable<any> {
    return this.http.get(this.urlConnectString + "/" + id)
  }

  public deleteProduct(product: Product): Observable<any> {
    return this.http.delete(this.urlConnectString + "/" + product._id)
  }

  public addProduct(product: Product) {
    return this.http.post(this.urlConnectString, product);
  }

  public updateProduct(product: Product) {
    return this.http.patch(this.urlConnectString + "/" + product._id, product)
  }
}
