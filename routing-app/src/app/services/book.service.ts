import {OnInit, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Http} from '@angular/http';

import {Book} from './book';
//import {BOOKS} from './mock.books';
import { Observable } from 'rxjs/Observable';
import { BOOKS } from './mock.books';
import {Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';


/**
 * please go through the below url for understanding the flow
 * https://www.concretepage.com/angular-2/angular-2-routing-and-navigation-example#software
 */
@Injectable()
export class BookService{

    constructor(private _httpClient: HttpClient, private _http: Http, private router: Router){
        console.log('BookService is loading');
    }


     BOOKS: Book[] = [
        {"id": 1, "name": "Core Java", "price": "25.50", "description": "Core Java Tutorials"},
        {"id": 2, "name": "Angular", "price": "15.20", "description": "Learn Angular"},
        {"id": 3, "name": "Hibernate", "price": "13.50", "description": "Hibernate Examples"},
        {"id": 4, "name": "TypeScript", "price": "26.40", "description": "TypeScript Tutorials"}
    ];

    books: Book[] = this.BOOKS;

    book: Book;

    getBooks(){//Observable<any> {
        //return this._httpClient.get("/services/mock.books.ts",{});
        //return this._httpClient.get("/mock.json",{});
        //return this._http.get("http://localhost:4200/app/json/mock.json",{});

        return this.books;
    }
    
    getBooks1(): Observable<any> {
        //return this._httpClient.get("/services/mock.books.ts",{});
        return this._httpClient.get("/mock.json",{});
        //return this._http.get("http://localhost:4200/app/json/mock.json",{});
    }

    getBook(id: string): Observable<any> {
     const headers  = new HttpHeaders();
     headers.append("id", id);
     return this._httpClient.get("mock.json", {headers});
    }


    getBookById(id: number) {
        //const bid = Number.parseInt(id);
        return this.getBooks().filter(X => X.id == id);
       }

    addBook(book: Book){
            this.books = this.BOOKS;
            this.books.push(book);
            console.log('addBook() book service: '+JSON.stringify(this.books));
            this.router.navigate(['/home']);
    }

    modifyBook(id: number, book: Book){
        this.book = this.getBooks().find(X => X.id == id);
        let index = this.books.indexOf(this.book);
        this.books[index] == this.book;
    }


    deleteBook(id: number){
        console.log('deleteBook(id: number):');
        this.book =  this.getBookById(id).find(x=>x.id == id);
        let index = this.books.indexOf(this.book);
        this.books.splice(index, 1);
        console.log("books after deleted "+JSON.stringify(this.books));
    }

}
