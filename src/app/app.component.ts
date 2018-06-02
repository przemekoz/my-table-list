import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ref = 499778;
    rating = 3;
    pagination = {
        'total': 50,
        'current': 0,
        'links': {
            '0': 'page=0',
            '1': 'page=1',
            '2': 'page=2',
            '3': 'page=3',
            '4': 'page=4',
            '5': 'page=5',
            '6': 'page=6',
            '7': 'page=7',
            '8': 'page=8',
            '49': 'page=49'
        },
        'from': 0,
        'to': 9,
        'left': false,
        'right': true,
        'leftEnd': false,
        'rightEnd': true

    };

    changePageCallback(page) {
        console.log(`I will change page to: ${page}`);
    }

    constructor() { }

    ngOnInit() {
    }
}
