import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'app-list-pagination',
    templateUrl: './list-pagination.component.html',
    styleUrls: ['./list-pagination.component.scss']
})
export class ListPaginationComponent implements OnInit, OnChanges {

    currentPage: number;
    @Input() pagination: any;
    @Output() changePage = new EventEmitter<number>();

    pages: string[];

    constructor() { }

    ngOnInit() {
        this.pages = Object.keys(this.pagination.links);
    }

    ngOnChanges() {
        this.pages = Object.keys(this.pagination.links);
    }

    setPage(page: number) {
        this.pagination.current = page;
        this.changePage.emit(page);
    }

}
