import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentlyAddedItemComponent } from './recently-added-item.component';


describe('RecentlyAddedItemComponent', () => {
  let component: RecentlyAddedItemComponent;
  let fixture: ComponentFixture<RecentlyAddedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyAddedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
