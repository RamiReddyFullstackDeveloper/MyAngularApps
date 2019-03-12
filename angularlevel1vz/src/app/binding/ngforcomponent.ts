import {Component} from '@angular/core';


@Component({
    selector: 'app-ngfor',
    template: `<h1>{{heading}}</h1>
                <table class="table ">
                    <tr>
                        <th>#</th>
                        <th>Game</th>
                        <th>Platform</th> 
                        <th>Release</th>
                    </tr>
                    <tr *ngFor="let game of games; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{game.game}}</td>
                        <td>{{game.platform}}</td>
                        <td>{{game.release}}</td>
                    </tr>
                </table>`
})
export class NgForComponent {
    heading : string;
    games : [{
        game: string,
        platform : string,
        release : string
    }];
    constructor(){
        this.heading = "Display List using ngFor in Angular 2"

        this.games = [{
            game : "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release : "August 23"
        },
        {
            game : "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release : "August 23"
        },
        {
            game : "The Huntsman: Winter's Curse",
            platform: "PS4",
            release : "August 23"
        },
        {
            game : "The Huntsman: Winter's Curse",
            platform: "PS4",
            release : "August 23"
        }]
    };
};

/*
   index – the position value of the item in the list.
   first – boolean value, true for the 1st item in the list.
   last – boolean value, true for the last item in the list.
   even – boolean value, indicates if the element is at even index.
  odd – boolean value, indicates if the element is at odd index

*/