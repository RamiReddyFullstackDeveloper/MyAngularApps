import {Component, OnInit} from "@angular/core";
import { BookService } from "../services/book.service";
import { ActivatedRoute } from "@angular/router";
import {Router,  Params} from "@angular/router";
import {Location} from "@angular/common";
import { Book } from "../services/book";

@Component({
    selector: 'update-book',
    templateUrl: './update-book.component.html',
    styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit{

    book : Book;
    constructor(private bookService: BookService,
                private route: ActivatedRoute,
                private location: Location,
                private router : Router
                ){}

                getBook(){
                   this.route
                   .params
                   .switchMap((params: Params) => this.bookService.getBookById(+params['id']))
                   .subscribe(book => this.book = book);
                }

    ngOnInit(){
        this.getBook();
    }

    updateBook(){
        this.bookService.modifyBook(this.book.id, this.book);
        this.router.navigate(['/home']);
    }


    goBack(){
        this.location.back();
    }

}
