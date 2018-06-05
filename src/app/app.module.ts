import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RatingSetComponent } from './rating-set/rating-set.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';
import { PaymentsModule } from './payments/payments.module';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        RatingSetComponent,
        ListPaginationComponent
    ],
    imports: [
        PaymentsModule,
        BrowserModule,
        MaterialModule,
        HttpClientModule,
        AppRoutingModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
