import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './container/main.component';
import { MainRoutingModule } from './main-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        MainRoutingModule,
    ]
})
export class MainModule {
}
