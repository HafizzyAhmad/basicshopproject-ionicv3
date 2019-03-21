import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(public http: HttpClient) {
  }

  getfoodList() {
    return new Promise(resolve => {
      const url = "../assets/data/makanan.json";
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}


