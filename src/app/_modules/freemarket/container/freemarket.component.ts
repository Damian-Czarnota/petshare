import { Component } from '@angular/core';

@Component({
    selector: 'app-freemarket',
    templateUrl: './freemarket.component.html',
    styleUrls: ['./freemarket.component.scss']
})
export class FreemarketComponent {

    static SECONDARY_NAVIGATION_STEPS = [{ name: 'FREEMARKET', url: '/'}, {name:'SUPPORT', url: '/support'}]

    SECONDARY_NAVIGATION_STEPS = FreemarketComponent.SECONDARY_NAVIGATION_STEPS;
}
