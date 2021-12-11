import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FreemarketComponent } from './container/freemarket.component';
import { FreemarketRoutingModule } from './freemarket-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SecondaryNavigationModule } from '@app/_shared/secondary-navigation/secondary-navigation.module';
import { LoadersModule } from '@app/_shared/loaders/loaders.module';


@NgModule({
    declarations: [
        FreemarketComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FreemarketRoutingModule,
        SecondaryNavigationModule,
        LoadersModule
    ]
})
export class Freemarket {
}
