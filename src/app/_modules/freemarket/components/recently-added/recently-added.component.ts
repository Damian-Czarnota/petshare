import { Component } from '@angular/core';
import { RECENTLY_ADDED_DATA } from 'src/data/recently-added.const';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss']
})
export class RecentlyAddedComponent {
  RECENTLY_ADDED_DATA = RECENTLY_ADDED_DATA;
}
