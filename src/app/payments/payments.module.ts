import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ListPaginationComponent } from '../list-pagination/list-pagination.component';
import { PaymentsComponent } from './payments.component';
import { RatingSetComponent } from '../rating-set/rating-set.component';
import { MaterialModule } from '../material/material.module';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { FormsModule } from '@angular/forms';
import { PaymentDetailDialogComponent } from './payment-detail-dialog/payment-detail-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        PaymentsRoutingModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        PaymentsComponent,
        PaymentsListComponent,
        ListPaginationComponent,
        RatingSetComponent,
        ListFilterComponent,
        PaymentDetailDialogComponent
    ]
})
export class PaymentsModule { }
