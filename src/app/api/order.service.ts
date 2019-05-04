import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost/food/api/insertOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: Http) { }

  createOrder(orderDetail) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log(orderDetail);
      this.http.post(apiUrl, JSON.stringify(orderDetail), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
}
