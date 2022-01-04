import {Cart} from './cart.model';
import { Component, EventEmitter} from '@angular/core';
import { Buyer } from './buyer.model';



export class BuyerServices
{
    BuyerChanged = new EventEmitter<Buyer[]>();
    buyer : Buyer[] =
    [

    ];


    getBuyer()
    {
        return this.buyer.slice();
    }

 
    addToBuyer(orderitems:Buyer)
      {
          this.buyer.push(orderitems);
          this.BuyerChanged.emit(this.buyer.slice());
      }

  
      deleteBuyer()
       {
           this.buyer = [];
       }


}