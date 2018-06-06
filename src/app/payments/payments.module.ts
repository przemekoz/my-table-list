import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ListPaginationComponent } from '../list-pagination/list-pagination.component';
import { PaymentsComponent } from './payments.component';

@NgModule({
    imports: [
        CommonModule,
        PaymentsRoutingModule
    ],
    declarations: [
        PaymentsComponent,
        PaymentsListComponent,
        ListPaginationComponent
    ]
})
export class PaymentsModule { }
