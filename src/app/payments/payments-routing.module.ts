import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [

    {
        path: 'payments',
        component: PaymentsComponent,
        children: [
            {
                path: 'list',
                component: PaymentsListComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentsRoutingModule { }
