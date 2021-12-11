import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { metaReducers, ROOT_REDUCERS } from '@app/_core/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../../assets/translations/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        StoreModule.forRoot(ROOT_REDUCERS, {
            metaReducers,
            runtimeChecks: {
                strictActionSerializability: true,
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        EffectsModule.forRoot([]),
        BrowserAnimationsModule,
    ],
    providers: [
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: HttpConfigInterceptor,
        //     multi: true
        // }
    ],
    exports: [ ],
})
export class CoreModule {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('pl');
        translate.use('pl');
    }
}
