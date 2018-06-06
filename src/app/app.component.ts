import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ref = 499778;
    rating = 3;

    constructor() { }

    ngOnInit() {
    }
}
