import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './container/main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [],
        children: []
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class MainRoutingModule {
}
