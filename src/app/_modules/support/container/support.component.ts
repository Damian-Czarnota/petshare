import { Component, OnInit } from '@angular/core';
import { FreemarketComponent } from '@app/_modules/freemarket/container/freemarket.component';
import { InfoBoxType } from '@app/_shared/info-box/info-box.component';
import { SUPPORT_DATA } from 'src/data/support.const';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  SECONDARY_NAVIGATION_STEPS = FreemarketComponent.SECONDARY_NAVIGATION_STEPS;
  InfoboxType = InfoBoxType;
  SUPPORT_DATA = SUPPORT_DATA;

  constructor(private _title: Title) { }

  ngOnInit(): void {
    this._title.setTitle('Support Center | Pluto for You!')
  }

}
