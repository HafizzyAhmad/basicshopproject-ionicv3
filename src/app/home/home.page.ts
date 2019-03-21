import { LocalDataService } from './../services/local-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foodList: any;

  constructor(public localDataService: LocalDataService) {
    this.getFood();
  }
  
  getFood() {
    //this.foodList = this.localDataService.getFoodList();
    this.localDataService.getfoodList()
    .then(data => {
      this.foodList = data;
      console.log(this.foodList);
    });
  }

/*
  addToCart(makanan) {
    this.localDataService.addMakanan(this.makanan);
    this.LocalDataService.setItem(this.makanan);
  }

  openCart() {
    this.router.navigate(['cart']);
  }
*/
  

}

