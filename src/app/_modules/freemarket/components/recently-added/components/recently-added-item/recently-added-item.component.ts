import { Component, Input, OnInit } from '@angular/core';
import { ListingItem } from '@app/_core/models/listing-item';

@Component({
  selector: 'app-recently-added-item',
  templateUrl: './recently-added-item.component.html',
  styleUrls: ['./recently-added-item.component.scss']
})
export class RecentlyAddedItemComponent implements OnInit {
  @Input() item: ListingItem;

  constructor() { }

  ngOnInit(): void {
  }

}
