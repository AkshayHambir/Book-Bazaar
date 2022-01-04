import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartServices } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order.model';
import { from } from 'rxjs';
import { NewOrderServices } from '../neworder.service';
import { Userlogin } from '../userlogin.model';
import { UserServices } from '../user.service';
import { Buyer } from '../buyer.model';
import {BuyerServices} from '../buyer.service'


@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private cartSer:CartServices,private http:HttpClient,private newOrde:NewOrderServices,private userser:UserServices,private buyser:BuyerServices) { }
  cart : Cart[] ;
  order : Order[];
  user : Userlogin[];
  buyer : Buyer[];

  final_total :number =0;
  ngOnInit(): void {
    this.cart = this.cartSer.getcart();
   // console.log(this.cart[0].book_id);
    this.user = this.userser.getuser();
   // console.log(this.user[0]);
    //console.log(this.user[0]._id);

    for (let i of this.cart) {
      this.final_total = this.final_total + i.book_total;
    }
  }
  deleteCart(index: number) {

    this.cartSer.deleteCart(index);
    this.cart = this.cartSer.getcart();
    this.final_total = 0;
    for (let i of this.cart) {

      this.final_total = this.final_total + i.book_total;
    }

  }
 
  placeOrder2() {

    for (let i of this.cart) {
      const items = new Order(i.book_id, i.book_name, i.book_count, i.book_price);
      this.newOrde.addToOrder(items);
    }
    for (let i of this.user) {
      const items=new Buyer(i._id, i.name, i.address);
      this.buyser.addToBuyer(items);
    }
    
    

    let products2: Order[];
    let user2 : Buyer[];
    

    products2 = this.newOrde.getOrder();
    user2 = this.buyser.getBuyer();
    console.log(products2);
    console.log(user2);
    let amount = this.final_total;
    let address = "pune";
    let user1 = "5ef6e8c89059b844d0971e4e";
    //let address = this.user[0].address;
    //let user1 =this.user[0]._id;

    let postData =
    {
      products: products2,
      amount: amount,
      address : address,
      user: user1
   }
    // console.log(products2);

     //console.log(postData);

    this.http.post('http://localhost:3004/api/order/create', postData).subscribe(responseData => {
      console.log(responseData);


      this.newOrde.deleteOrder();

      alert("Order is created !!!!");
    });

  }

}
