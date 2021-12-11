import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryNavigationComponent } from './secondary-navigation.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
    declarations: [
        SecondaryNavigationComponent
    ],
    exports: [
        SecondaryNavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ]
})
export class SecondaryNavigationModule { }
