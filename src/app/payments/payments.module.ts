import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsListComponent } from './payments-list/payments-list.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ],
  declarations: [PaymentsListComponent]
})
export class PaymentsModule { }
