import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ListPaginationComponent } from '../list-pagination/list-pagination.component';
import { PaymentsComponent } from './payments.component';
import { RatingSetComponent } from '../rating-set/rating-set.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        PaymentsRoutingModule,
        MaterialModule
    ],
    declarations: [
        PaymentsComponent,
        PaymentsListComponent,
        ListPaginationComponent,
        RatingSetComponent
    ]
})
export class PaymentsModule { }
