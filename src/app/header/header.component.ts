import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Genre} from '../genre.model';
import {map} from 'rxjs/operators';
//import { Userlogin } from '../userlogin.model';
//import { UserServices } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genres:Genre[];
  //user : Userlogin[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<{[key:string]:Genre}>("http://localhost:3004/api//genres")
    .pipe(map(
      responseData => 
      {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key});
            }
        }

        //console.log(postArray);
        return postArray;

           
    })).subscribe(posts =>{
     //   console.log("array"+posts);
  
       this.genres = posts;
     }) ;
  
    //this.user=this.userser.getuser();




  }

}
