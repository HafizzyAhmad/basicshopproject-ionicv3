import { Component, OnInit } from '@angular/core';
import { LocalDataService } from './../services/local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  makanan: any;
  public selectedItems = [];
  item: [];
 
  total = 0;

  constructor(public router: Router, private LocalDataService: LocalDataService,) { }

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
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);

}



}
