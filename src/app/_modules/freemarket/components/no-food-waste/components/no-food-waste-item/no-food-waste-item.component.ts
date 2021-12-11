import { Component, Input, OnInit } from '@angular/core';
import { NoFoodWasteItem } from '@app/_core/models/no-food-waste';

@Component({
  selector: 'app-no-food-waste-item',
  templateUrl: './no-food-waste-item.component.html',
  styleUrls: ['./no-food-waste-item.component.scss']
})
export class NoFoodWasteItemComponent implements OnInit {
  @Input() item: NoFoodWasteItem;

  constructor() { }

  ngOnInit(): void {
  }

}
