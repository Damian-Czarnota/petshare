import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InfoBoxComponent
  ],
  exports: [
    InfoBoxComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class InfoBoxModule {
}
