import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsListComponent } from './payments-list.component';
import { MaterialModule } from '../../material/material.module';
import { ListFilterComponent } from '../list-filter/list-filter.component';
import { RatingSetComponent } from '../../rating-set/rating-set.component';
import { ListPaginationComponent } from '../../list-pagination/list-pagination.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { PaymentsListService } from '../services/payments-list.service';

describe('PaymentsListComponent', () => {
    let component: PaymentsListComponent;
    let fixture: ComponentFixture<PaymentsListComponent>;

    let testQuote, getSpy;

    beforeEach(async(() => {

        testQuote = '';

        // Create a fake PaymentsListService object with a `get()` spy
        const paymentsListService = jasmine.createSpyObj('PaymentsListService', ['get']);
        // Make the spy return a synchronous Observable with the test data
        getSpy = paymentsListService.get.and.returnValue(of(testQuote));

        TestBed.configureTestingModule({
            declarations: [
                ListPaginationComponent,
                RatingSetComponent,
                ListFilterComponent,
                PaymentsListComponent],
            imports: [MaterialModule, FormsModule],
            providers: [
                { provide: PaymentsListService, useValue: paymentsListService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
