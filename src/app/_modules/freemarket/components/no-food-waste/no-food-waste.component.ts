import { Component, OnInit } from '@angular/core';
import { NO_FOOD_WASTE_DATA } from 'src/data/no-food-waste.const';

@Component({
  selector: 'app-no-food-waste',
  templateUrl: './no-food-waste.component.html',
  styleUrls: ['./no-food-waste.component.scss']
})
export class NoFoodWasteComponent implements OnInit {
  NO_FOOD_WASTE_DATA = NO_FOOD_WASTE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
