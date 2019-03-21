import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from '../services/local-data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*makanan: any;
  item: [];
  cart: [];

  constructor(public router: Router,public localDataService: LocalDataService) {
    this.getMakanan();
  }
  
  getMakanan() {
    //this.foodList = this.localDataService.getFoodList();
    this.localDataService.getMakanan()
    .then(data => {
      this.makanan = data;
      console.log(this.makanan);
    });
  }

  ngOnInit(){

  }

  addToCart(foodName) {
    //this.localDataService.addMakanan(this.makanan);
    this.localstorage.setItem("foodname", foodName);
  }

  openCart() {
    this.router.navigate(['cart']);
  }

  

}

*/
