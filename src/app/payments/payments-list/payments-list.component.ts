import { Component, OnInit } from '@angular/core';
import { PaymentsListService } from '../services/payments-list.service';
import { PaymentsListPagination, ListGetParams, PaymentsListItem } from '../interfaces/payments.interface';

@Component({
    templateUrl: './payments-list.component.html',
    styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {
    loading = true;
    rows: PaymentsListItem[];
    pagination: PaymentsListPagination;

    constructor(private paymentsListService: PaymentsListService) { }

    changePageCallback(page: number) {
        this.getList({ page: page });
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
                    this.rows = data.payments;
                    this.pagination = data.pagination;
                },
                error => {
                    this.loading = false;
                    // this.alertService.error(error);
                });
    }
}
