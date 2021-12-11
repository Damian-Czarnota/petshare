import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './container/layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    MenuComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
