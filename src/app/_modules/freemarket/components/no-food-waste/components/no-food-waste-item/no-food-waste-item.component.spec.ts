import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastMinuteDealsItemComponent } from './no-food-waste-item.component';


describe('LastMinuteDealsItemComponent', () => {
  let component: LastMinuteDealsItemComponent;
  let fixture: ComponentFixture<LastMinuteDealsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMinuteDealsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMinuteDealsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
