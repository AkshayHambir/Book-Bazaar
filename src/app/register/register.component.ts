import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; lastname: string, email: string; password: string, address: string; })
  {

    console.log(postData);

    this.http .post('http://localhost:3004/api/signup',postData).subscribe(responseData => {
        console.log(responseData);
        alert("welcome account is created");
      });
      this.router.navigateByUrl('/login');

  }

}
