import { Component, OnInit } from '@angular/core';
import { FreemarketComponent } from '@app/_modules/freemarket/container/freemarket.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  SECONDARY_NAVIGATION_STEPS = FreemarketComponent.SECONDARY_NAVIGATION_STEPS;

  constructor() { }

  ngOnInit(): void {
  }

}
