import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {


  public makanan = [];
  public cart = [];
  constructor(public http: HttpClient) {
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

  ngOnInit() {
    
  }

  getCart() {
    return this.cart;
  }

  addMakanan(makanan) {
    this.cart.push(makanan);
  }
  
}
