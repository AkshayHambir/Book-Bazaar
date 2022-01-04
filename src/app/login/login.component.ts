import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { throwError, BehaviorSubject } from 'rxjs';
import { Userlogin } from '../userlogin.model';
import { UserServices } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  user1:any;

  constructor(private route: ActivatedRoute,
    private router: Router,private http:HttpClient,private userser:UserServices) { }

  ngOnInit(): void {
  }

  loginClicked(form:NgForm)
  {
    
    const email = form.value.email;
    const password = form.value.password;

    const login = { email :email,password:password};
    

    //alert(password);

   
    this.http.post<{[key:string]:Userlogin}>('http://localhost:3004/api/signin',login).subscribe(responseData => {
      this.user1 = responseData;
      console.log(responseData.user);
      sessionStorage.setItem('name',responseData.user.name);
      sessionStorage.setItem('email',responseData.user.email);
      sessionStorage.setItem('id',responseData.user._id);
      sessionStorage.setItem('address',responseData.user.address);
      // console.log(this.user1);
    /* let id=this.user1._id;
      let name=this.user1.name;
      let email = this.user1.email;
      let address = this.user1.address;
      console.log(id,name,email,address);

      const useritem = new Userlogin(email,id,name,address);*/
      this.userser.addUser(this.user1);
      //console.log(useritem);
      alert("login success");
      this.router.navigate(['/main']);
      

     // if(responseData.user.name)
    //{
      //  this.handleAuthentication(responseData.user.email,responseData.user._id,responseData.user.name);
        //alert("login success");
        //this.router.navigate(['/main']);

      //}
    })
    form.reset();
  
  
}
 /*
  private handleAuthentication(
    email: string,
    userId: string,
    name: string,
    address:string,
  ) 
  {
   
    const user = new Userlogin(email, userId, name,address);
    this.user.next(user);

    localStorage.setItem('userData', JSON.stringify(user)); // option 1
    localStorage.setItem('user_email', email);  // option 2
    localStorage.setItem('user_name', name);  // option 3
    localStorage.setItem('user_id', userId);  // otpion 4
    localStorage.setItem('user_address', address);  // otpion 4
 
    sessionStorage.setItem('user_name', name);
    sessionStorage.setItem('user_address', address);
  }
*/
}
