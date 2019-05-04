import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

let apiUrl = 'http://localhost/food/api/insertOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( public http: HttpClient) { }

  createOrder(orderDetail) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      console.log(orderDetail);
      this.http.post(apiUrl , JSON.stringify(orderDetail), {headers: headers})
        .subscribe(res => {
          resolve(res.toString());
        }, (err) => {
          reject(err);
        });
    });

    /*this.http.post(apiUrl, JSON.stringify(orderDetail)).subscribe((response) => {
          console.log(response);
      });*/

  }

}
