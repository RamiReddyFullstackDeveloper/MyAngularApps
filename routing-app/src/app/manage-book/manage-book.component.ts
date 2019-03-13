import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Book } from "../services/book";
import { BookService } from "../services/book.service";
import { Router } from "@angular/router";




@Component({
selector: 'manage-book',
templateUrl: './manage-book.component.html',
styleUrls: ['./manage-book.component.css']
})

export class ManageBookComponent implements OnInit{

    constructor(private bookService: BookService,
                private router: Router){
     
    }
    ngOnInit(){
        this.getBooks(); 
    }

    books: Book[] = [];

    getBooks(){
      this.books = this.bookService.getBooks();
    }

    updateBook(id: number){
      this.router.navigate(['/update-book', id]);
    }

    deleteBook(id: number){
     this.bookService.deleteBook(id);
    }

}