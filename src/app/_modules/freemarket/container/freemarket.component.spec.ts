import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FreemarketComponent } from './main.component';

describe('MainComponent', () => {
    let component: FreemarketComponent;
    let fixture: ComponentFixture<FreemarketComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FreemarketComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FreemarketComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
