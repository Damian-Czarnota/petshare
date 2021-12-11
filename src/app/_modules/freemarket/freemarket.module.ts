import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FreemarketComponent } from './container/freemarket.component';
import { FreemarketRoutingModule } from './freemarket-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SecondaryNavigationModule } from '@app/_shared/secondary-navigation/secondary-navigation.module';
import { LoadersModule } from '@app/_shared/loaders/loaders.module';
import { InfoBoxModule } from '@app/_shared/info-box/info-box.module';
import { ListingSingleComponent } from './pages/listing-single/listing-single.component';


@NgModule({
    declarations: [
        FreemarketComponent,
        ListingSingleComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FreemarketRoutingModule,
        SecondaryNavigationModule,
        LoadersModule,
        InfoBoxModule
    ]
})
export class Freemarket {
}
