import { Component, OnInit } from '@angular/core';
import { PaymentsListService } from '../services/payments-list.service';
import { PaymentsListPagination, ListGetParams, PaymentsListItem, PaymentsListFilter } from '../interfaces/payments.interface';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDetailDialogComponent } from '../payment-detail-dialog/payment-detail-dialog.component';

@Component({
    templateUrl: './payments-list.component.html',
    styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {
    loading = true;
    rows: PaymentsListItem[];
    pagination: PaymentsListPagination;

    private current: ListGetParams = {
        page: 0,
        filters: { supplier: '', rating: 0 }
    };

    constructor(
        private paymentsListService: PaymentsListService,
        public dialog: MatDialog) { }

    ngOnInit() {
        this.getList({ page: 0, filters: { supplier: '', rating: 0 } });
    }

    changePageCallback(page: number) {
        this.getList({ page: page, filters: this.current.filters });
    }

    changeFilterCallback(filters: PaymentsListFilter) {
        this.current.filters = filters;
        this.getList({ page: 0, filters: filters });
    }

    showDetails(element) {
        this.dialog.open(PaymentDetailDialogComponent, {
            data: {
                element: element
            }
        });
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
                    this.rows = [];
                    this.pagination = {
                        left: false,
                        leftEnd: false,
                        links: [],
                        right: false,
                        rightEnd: false,
                        current: 0,
                        total: 0,
                        from: 0,
                        to: 0
                    };
                });
    }
}
