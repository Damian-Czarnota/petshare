import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoBoxModule } from '@app/_shared/info-box/info-box.module';
import { LoadersModule } from '@app/_shared/loaders/loaders.module';
import { SecondaryNavigationModule } from '@app/_shared/secondary-navigation/secondary-navigation.module';
import { TranslateModule } from '@ngx-translate/core';
import { NoFoodWasteItemComponent } from './components/no-food-waste/components/no-food-waste-item/no-food-waste-item.component';
import { NoFoodWasteComponent } from './components/no-food-waste/no-food-waste.component';
import { RecentlyAddedItemComponent } from './components/recently-added/components/recently-added-item/recently-added-item.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { FreemarketComponent } from './container/freemarket.component';
import { FreemarketRoutingModule } from './freemarket-routing.module';
import { ListingSingleComponent } from './pages/listing-single/listing-single.component';


@NgModule({
  declarations: [
    FreemarketComponent,
    ListingSingleComponent,
    RecentlyAddedComponent,
    RecentlyAddedItemComponent,
    NoFoodWasteItemComponent,
    NoFoodWasteComponent
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
