import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedbackService {

  private urlConnectString: string;

  constructor(private http: HttpClient) {
    this.urlConnectString = 'http://localhost:3000/feedback'
  }

  public sendMessage(message): Observable<any> {
     return this.http.post(this.urlConnectString, message);
    //console.log(message);
  }
}