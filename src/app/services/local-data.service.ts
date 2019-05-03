import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {


  public makanan = [];
  private  cart = [];
  constructor(public http: HttpClient, private router: Router) {
  }

  getMakanan() {
    return new Promise(resolve => {
      const url = "../assets/data/makanan.json";
      this.http.get(url).subscribe(data => {
        resolve(data);
        return this.makanan;
      }, err => {
        console.log(err);
      });
    });
  }

  getCart() {
    return this.cart;
  }

  addMakanan(makanan) {
    this.cart.push(makanan);
  }

  removeMakanan (makanan){
  
  }
  
  
}
