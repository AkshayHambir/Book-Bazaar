import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { CartServices } from '../cart.service';
import { Cart } from '../cart.model';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  id: number;
  books: any;
  @ViewChild('ingre_qty') ingre_qty: ElementRef;

  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient, private cartServi: CartServices) { }

  ngOnInit(): void {
    let id2 = this.route.snapshot.paramMap.get('id');



    this.http.get<{ [key: string]: Book }>("http://localhost:3004/api/book/" + id2).subscribe(posts => {
      //console.log("array"+posts);

      this.books = posts;
    });
  }

  addTocart() {
    console.log(this.books._id);
    cart: Cart;
    const qty = this.ingre_qty.nativeElement.value;

    let id = this.books._id;
    let book_name = this.books.name;
    let auth_name = this.books.authers;
    let book_count = qty;
    let book_image = this.books.productImagePath;
    let book_price = this.books.price;
    let book_total = qty * book_price;

    console.log(this.books.name);
    console.log(qty);
    const cartItems = new Cart(this.books._id, book_name, auth_name, book_count, book_image, book_price, book_total);

    //console.log(cartItems);
    this.cartServi.addCart(cartItems);
    this.router.navigateByUrl('/mycart');
  }

}
