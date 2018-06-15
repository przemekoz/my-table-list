import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ListFilterComponent } from './list-filter.component';
import { PaymentsListFilter } from '../interfaces/payments.interface';

describe('ListFilterComponent', () => {
    let component: ListFilterComponent;
    let fixture: ComponentFixture<ListFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListFilterComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should reset filters', () => {
        const localFilters: PaymentsListFilter = {
            supplier: '',
            rating: -1
        };
        component.changeFilters.subscribe(filters => expect(filters).toEqual(localFilters));
        component.reset();
    });
});
