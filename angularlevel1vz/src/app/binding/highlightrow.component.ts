import { Component }      from '@angular/core';

@Component({
    selector: 'app-highlight',
    templateUrl: './highlight.component.html'
})
 export class HighlightComponent {
    headMessage : string;
    selectedRow : Number;
    setClickedRow : Function;

    games : [{
        game: string,
        platform : string,
        release : string
    }];

    constructor(){
        this.headMessage = "Please click below rows !!";
        this.games = [{
            game : "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release : "August 23"
        },
        {
            game : "Amplitude",
            platform: " PS4",
            release : "January 5"
        },
        {
            game : "The Huntsman: Winter's Curse",
            platform: "PS4",
            release : "August 23"
        },
        {
            game : "Resident Evil Zero HD Remaster",
            platform: "Win, PS3, PS4, X360, XBO",
            release : "January 19"
        },
        {
            game : "Lego Marvel's Avengers",
            platform: "Win, X360, XBO, PS3, PS4, PSVita, WiiU, 3DS",
            release : "January 26"
        }];
        
        this.setClickedRow = function(index:any){
            this.selectedRow = index;
        }
    };
};