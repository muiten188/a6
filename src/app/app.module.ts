import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthGuard } from './shared/guard';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';
import { MyHttpInterceptor } from './shared/my-http-interceptor'
export const createTranslateLoader = (http: HttpClient) => {
  /* for development
  return new TranslateHttpLoader(
      http,
      '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
      '.json'
  ); */
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
