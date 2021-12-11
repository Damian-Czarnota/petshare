import { Component, Input, OnInit } from '@angular/core';
import { RecentlyAddedItem } from '@app/_core/models/recently-added';

@Component({
  selector: 'app-recently-added-item',
  templateUrl: './recently-added-item.component.html',
  styleUrls: ['./recently-added-item.component.scss']
})
export class RecentlyAddedItemComponent implements OnInit {
  @Input() item: RecentlyAddedItem;

  constructor() { }

  ngOnInit(): void {
  }

}
