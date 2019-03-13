import { OnInit } from "@angular/core";
import { BookService } from "../services/book.service";
import { Component } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import {URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/switchMap';
import {Location} from "@angular/common";
import { Book } from "../services/book";

@Component({
    selector: 'view-detail-app',
    templateUrl: './view-detail.component.html',
    styleUrls: ['./view-detail.component.css']
})

/**
 * please go through the below url for understanding the flow
 * https://www.concretepage.com/angular-2/angular-2-routing-and-navigation-example#software
 */
export class ViewDetailComponent implements OnInit{

    book : Book;

    constructor(private bookService: BookService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router){   }
                
                //private router: Router,
                //private location: Location
                viewBookDetail(){//this method required us when we use <!-- <a [routerLink]="['/view-detail, book.id]">View Details</a>-->
                    this.route
                    .params
                    .switchMap((params: Params) => this.bookService.getBookById(+params['id']))
                    .subscribe(book => this.book = book);
                }


                id: number;
                getQueryParam(){////this method required us when we use <!--  <a [routerLink]="['/view-detail']" [queryParams] =" {id:book.id}">View Details</a>-->
                    this.route
                    .queryParams
                    .subscribe(params =>{
                        let idString = params['id'];//params allways returns string, if you wanna parse to number, then can be add + by prefix params ex below
                        let idInt = +params['id'];
                        this.id = idInt;
                        console.log("queryParams ="+idInt);
                     });
                   this.getBookById();
                  // this.book =  this.bookService.getBookById(this.id).find(X => X.id == this.id);
                }

                getBookById(): void{
                    this.book =  this.bookService.getBookById(this.id).find(X => X.id == this.id);
                }

                

    ngOnInit(): void{
        this.getQueryParam();
       // this.viewBookDetail();
        this.getParam();
       
    }


    goBack(){
    this.location.back();
    }

    updateBook(id: number){
    this.router.navigate(['/update-book',id]);
    }


    getParam(){
        let params = new URLSearchParams(window.location.search);
        let someParam = params.get('id');
       console.log('someParams '+someParam);
        // return someParam;
      }
}