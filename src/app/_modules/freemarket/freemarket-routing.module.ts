import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreemarketComponent } from './container/freemarket.component';


const routes: Routes = [
  {
    path: '',
    component: FreemarketComponent,
    canActivate: [],
    children: []
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FreemarketRoutingModule {
}
