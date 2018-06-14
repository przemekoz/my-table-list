import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-payment-detail-dialog',
    templateUrl: './payment-detail-dialog.component.html',
    styleUrls: ['./payment-detail-dialog.component.scss']
})
export class PaymentDetailDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
