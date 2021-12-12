import { Component, Input } from '@angular/core';
import { ListingItem } from '@app/_core/models/listing-item';

@Component({
  selector: 'app-no-food-waste-item',
  templateUrl: './no-food-waste-item.component.html',
  styleUrls: ['./no-food-waste-item.component.scss']
})
export class NoFoodWasteItemComponent {
  @Input() item: ListingItem;
}
