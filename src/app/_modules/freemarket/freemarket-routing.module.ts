import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreemarketComponent } from './container/freemarket.component';
import { ListingCheckoutComponent } from './pages/listing-checkout/listing-checkout.component';
import { ListingSingleComponent } from './pages/listing-single/listing-single.component';


const routes: Routes = [
    {
        path: '',
        component: FreemarketComponent,
        canActivate: [],
        children: []
    },
    {
        path: 'single/:slug',
        component: ListingSingleComponent,
        canActivate: [],
        children: []
    },
    {
        path: 'checkout/:slug',
        component: ListingCheckoutComponent,
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
