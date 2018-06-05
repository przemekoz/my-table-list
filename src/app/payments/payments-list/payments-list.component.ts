import { Component, OnInit } from '@angular/core';
import { PaymentsListService } from '../services/payments-list.service';

@Component({
    selector: 'app-payments-list',
    templateUrl: './payments-list.component.html',
    styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {

    loading: boolean;
    constructor(private paymentsListService: PaymentsListService) { }

    ngOnInit() {
        this.getList();
    }

    private getList() {
        this.loading = true;
        this.paymentsListService.get()
            .subscribe(
                data => {
                    this.loading = false;
                    console.log(data)
                },
                error => {
                    this.loading = false;
                    // this.alertService.error(error);
                });
    }


}
