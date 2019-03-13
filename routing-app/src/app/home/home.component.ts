import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { BookService } from "../services/book.service";

import {Book} from "../services/book";

@Component({
selector:'home',
templateUrl:'./home.component.html',
styleUrls:['./home.component.css']
})

/**
 * please go through the below url for understanding the flow
 * https://www.concretepage.com/angular-2/angular-2-routing-and-navigation-example#software
 */
export class HomeComponent implements OnInit{

    books: Book[];
    constructor(private bookService: BookService){}

    getBooks1(){
        this.bookService.getBooks1().subscribe(books=>{
            this.books = books;
        });
    }


    
    getBooks(){
       this.books = this.bookService.getBooks();
       console.log("HomeComponent json "+JSON.stringify(this.books));
    }

    ngOnInit(){
        console.log('HomeComponent init() invoked');
    this.getBooks();
    }

    test(){
        console.log('test hper link test() event fire');
    }


}