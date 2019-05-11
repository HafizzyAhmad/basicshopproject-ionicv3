import { Component, OnInit } from '@angular/core';
import { LocalDataService } from './../services/local-data.service';
import { OrderService } from './../services/order.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public selectedItems = [];
 
  total = 0;

  public orderDetail : any;
  userData = {"name":"", "phone":"" , "email":"", "total":""}

  constructor(public router: Router, private LocalDataService: LocalDataService, public OrderService: OrderService, private alertController: AlertController) { }

  ngOnInit() {
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
    //console.log(this.total)
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

  async submitOrder(){

    const alert = await this.alertController.create({
      header: "Yeayy!",
      subHeader: "Order Confirmed",
      message: "Your order has been received. Kindly check your email",
      buttons: ['Okay']
    });

    await alert.present();


    this.userData.name;
    this.userData.phone;
    this.userData.email;
    this.userData.total = this.total+"";

    /*this.userData.name = "mat";
    this.userData.phone = "011879435";
    this.userData.email = "mat@gmaoe.com";*/
    console.log(this.userData);
    this.OrderService.createOrder(this.userData);
    
  }

/*
  async presentAlert(){
    const alert = await this.alertController.create({
      header: "alert",
      subHeader: "Sub Alert",
      message: "This is alert message",
      buttons: ['Okay']
    });

    await alert.present();
  }
*/

}
