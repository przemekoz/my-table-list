import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rating-set',
    templateUrl: './rating-set.component.html',
    styleUrls: ['./rating-set.component.scss']
})
export class RatingSetComponent implements OnInit {

    @Input() ref: number;
    @Input() rating: number;

    constructor() { }

    ngOnInit() {
    }

    setRating(rating: number) {
        this.rating = rating;
        console.log(`${this.rating === 5 ? 'Yay!' : ''} I will change rating for: ${this.ref} to ${this.rating}`);
    }
}
