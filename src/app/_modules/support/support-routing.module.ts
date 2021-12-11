import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from '@app/_modules/support/container/support.component';
import { SupportItemComponent } from '@app/_modules/support/pages/support-item/support-item.component';

const routes: Routes = [{
    path: '',
    component: SupportComponent
  },
  {
    path: ':slug',
    component: SupportItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {
}
