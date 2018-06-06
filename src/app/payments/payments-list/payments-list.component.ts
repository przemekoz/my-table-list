import { Component, OnInit } from '@angular/core';
import { PaymentsListService } from '../services/payments-list.service';
import { PaymentsListPagination, ListGetParams } from '../interfaces/payments.interface';

@Component({
    templateUrl: './payments-list.component.html',
    styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {

    pagination: PaymentsListPagination;
    loading: boolean;
    constructor(private paymentsListService: PaymentsListService) { }

    private _this = this;

    changePageCallback(page: number) {
        console.log(this, `I will change page to: ${page}`);
        this.getList({
            page: page
        });
    }

    ngOnInit() {
        this.getList({ page: 0 });
    }

    private getList(params: ListGetParams) {
        this.loading = true;
        this.paymentsListService.get(params)
            .subscribe(
                data => {
                    this.loading = false;
                    console.log(data);
                    this.pagination = data.pagination;
                },
                error => {
                    this.loading = false;
                    // this.alertService.error(error);
                });
    }

}
