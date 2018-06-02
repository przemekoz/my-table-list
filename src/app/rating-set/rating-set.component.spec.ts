import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingSetComponent } from './rating-set.component';

describe('RatingSetComponent', () => {
  let component: RatingSetComponent;
  let fixture: ComponentFixture<RatingSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
