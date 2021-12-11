import { Component, Input } from '@angular/core';

export enum InfoBoxType {
  SUPPORT = 'SUPPORT',
  FREEMARKET = 'FREEMARKET'
}

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {

  @Input() type: InfoBoxType = InfoBoxType.FREEMARKET;
  @Input() title: string;
  @Input() description: string;

}
