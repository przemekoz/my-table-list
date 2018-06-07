import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentsListFilter } from '../interfaces/payments.interface';

@Component({
    selector: 'app-list-filter',
    templateUrl: './list-filter.component.html',
    styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

    filters: PaymentsListFilter;

    @Output() changeFilters = new EventEmitter<PaymentsListFilter>();

    constructor() { }

    ngOnInit() {
    }


    search() {
        this.changeFilters.emit(this.filters);
    }

    reset() {
        this.filters.rating = 0;
        this.filters.supplier = '';
        this.changeFilters.emit(this.filters);
    }
}
