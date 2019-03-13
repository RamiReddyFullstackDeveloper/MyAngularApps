import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common'
import {Book} from '../services/book'
import {BookService} from '../services/book.service'

@Component({
    selector: 'add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit{

    book: Book = new Book();
    books: Book[] = [];


    constructor(private router: Router,
                private service: BookService,
                private location: Location){

    }
    ngOnInit(): void{
      
    }

    addBook(): void{
        console.log('addBook() click event fired.');
        console.log('addBook()  '+JSON.stringify(this.book));
        console.log('addBook() length '+JSON.stringify(this.book).length);
       
        if(JSON.stringify(this.book).length == 2){//here 2 represents object is empty
            console.log('addBook() object null');
          this.router.navigate(['/add-book']);
        }
        else
        {
            this.service.addBook(this.book);
        }
     }

     goBack(){
         this.location.back();
     }

}