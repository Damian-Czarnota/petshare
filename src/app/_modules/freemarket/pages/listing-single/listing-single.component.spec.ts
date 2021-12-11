import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSingleComponent } from './listing-single.component';

describe('ListingSingleComponent', () => {
  let component: ListingSingleComponent;
  let fixture: ComponentFixture<ListingSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
