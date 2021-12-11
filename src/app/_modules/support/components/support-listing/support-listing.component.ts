import { Component, Input, OnInit } from '@angular/core';
import { Support } from '@app/_core/models/support';

@Component({
  selector: 'app-support-listing',
  templateUrl: './support-listing.component.html',
  styleUrls: ['./support-listing.component.scss']
})
export class SupportListingComponent implements OnInit {

  @Input() data: Support[];

  constructor() { }

  ngOnInit(): void {
  }

}
