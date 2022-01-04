
import {Userlogin} from './userlogin.model';
import { Component, EventEmitter} from '@angular/core';

//@Injectable()
export class UserServices
{
    UserChanged = new EventEmitter<Userlogin[]>();
    user : Userlogin[]=[];


    getuser()
    {
        return this.user.slice();
    }

   
    addUser(cartitems:Userlogin)
      {
          this.user.push(cartitems);
          this.UserChanged.emit(this.user.slice());
      }

    

      deleteUser(index:number)
      {
       
         
        this.user.splice(index, 1);     
        }
      


}