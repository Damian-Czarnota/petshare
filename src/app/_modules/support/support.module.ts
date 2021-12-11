import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './container/support.component';
import { SecondaryNavigationModule } from '@app/_shared/secondary-navigation/secondary-navigation.module';
import { InfoBoxModule } from '@app/_shared/info-box/info-box.module';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SecondaryNavigationModule,
    InfoBoxModule
  ]
})
export class SupportModule {
}
