import { LocalDataService } from './../services/local-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  public selectedItems = [];
 
  total = 0;
 
  constructor(private LocalDataService: LocalDataService) { }

  public ngOnInit() {
    /*let makanan = this.LocalDataService.getMakanan();
    let selected = {};
    for (let item of makanan) {
      if (selected[item.id]) {
        selected[item.id].count++;
      } else {
        selected[item.id] = {...item, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);*/
  }
}
