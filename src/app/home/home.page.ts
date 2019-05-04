import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from '../services/local-data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  makanan: any;
  item: [];
  cart: any;

  constructor(public router: Router,public localDataService: LocalDataService) {
    this.getMakanan();
  }

  public doughnutChartLabels:string[] = ['Me','Myself','Irine'];
  public doughnutChartData:number[] = [1200,800,300];
  public doughnutChartType:string = 'doughnut';

  
  getMakanan() {
    //this.foodList = this.localDataService.getFoodList();
    this.localDataService.getMakanan()
    .then(data => {
      this.makanan = data;
      //console.log(this.makanan);
    });
  }

  ngOnInit(){
    this.cart = this.localDataService.getCart();
    

  }

  addToCart(food) {
    //this.localDataService.addMakanan(this.makanan);
    //this.localstorage.setItem("foodname", foodName);
    this.localDataService.addMakanan(food);
  }

  openCart() {
    this.router.navigate(['cart']);
  }

  openDetails() {
    this.router.navigate(['detail']);
  }
  
  

}


