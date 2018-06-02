import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list-pagination',
    templateUrl: './list-pagination.component.html',
    styleUrls: ['./list-pagination.component.scss']
})
export class ListPaginationComponent implements OnInit {

    currentPage: number;
    @Input() pagination: any;
    @Input() changeCallback: any;

    pages: string[];

    constructor() { }

    ngOnInit() {
        this.pages = Object.keys(this.pagination.links);
    }

    setPage(page: number) {
        this.pagination.current = page;
        this.changeCallback(page);
    }

}
