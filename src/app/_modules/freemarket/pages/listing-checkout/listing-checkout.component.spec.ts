import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCheckoutComponent } from './listing-checkout.component';

describe('ListingCheckoutComponent', () => {
  let component: ListingCheckoutComponent;
  let fixture: ComponentFixture<ListingCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
