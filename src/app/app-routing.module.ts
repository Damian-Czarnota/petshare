import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./_modules/main/main.module').then((M) => M.MainModule),
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
