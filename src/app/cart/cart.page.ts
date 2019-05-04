import { LocalDataService } from './../services/local-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  public selectedItems = [];
 
  total = 0;
 
  constructor(public router: Router, private LocalDataService: LocalDataService) { }

  public ngOnInit() {
    let items = this.LocalDataService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }


  openCheckout() {
    this.router.navigate(['checkout']);
  }

  deleteMakanan(selectedItems){
     //console.log("delete button")
     let index: number = this.selectedItems.indexOf(selectedItems);
     if(index > -1){
     this.selectedItems.splice(index, 1);
     }
  }


}
