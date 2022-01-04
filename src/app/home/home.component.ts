import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:Book[];
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get<{[key:string]:Book}>("http://localhost:3004/api/books")
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
  
       this.books = posts;
     }) ;





  }

}
