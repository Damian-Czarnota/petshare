import { Component, Input } from '@angular/core';
import { Step } from '@app/_core/models/step';

@Component({
  selector: 'app-secondary-navigation',
  templateUrl: './secondary-navigation.component.html',
  styleUrls: ['./secondary-navigation.component.scss']
})
export class SecondaryNavigationComponent {

  @Input() steps: Step[];
  @Input() activeStepIndex: number;

}
