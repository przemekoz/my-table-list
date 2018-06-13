import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentsListFilter } from '../interfaces/payments.interface';

@Component({
    selector: 'app-list-filter',
    templateUrl: './list-filter.component.html',
    styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

    filters: PaymentsListFilter = {
        supplier: '',
        rating: -1
    };

    ratings = [
        {
            label: 'Select pound rating',
            value: -1
        },
        {
            label: 'Rating 0',
            value: 0
        },
        {
            label: 'Rating 1',
            value: 1
        },
        {
            label: 'Rating 2',
            value: 2
        },
        {
            label: 'Rating 3',
            value: 3
        },
        {
            label: 'Rating 4',
            value: 4
        },
        {
            label: 'Rating 5',
            value: 5
        }
    ];

    @Output() changeFilters = new EventEmitter<PaymentsListFilter>();

    constructor() { }

    ngOnInit() {
    }


    search() {
        this.changeFilters.emit(this.filters);
    }

    reset() {
        this.filters.rating = -1;
        this.filters.supplier = '';
        this.changeFilters.emit(this.filters);
    }
}
