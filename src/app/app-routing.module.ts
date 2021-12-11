import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./_modules/freemarket/freemarket.module').then((M) => M.Freemarket),
    },
    {
        path: 'support',
        loadChildren: () => import('./_modules/support/support.module').then((M) => M.SupportModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 40],
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: 'legacy'
    })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
