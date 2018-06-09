import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core';
import { SigninModule, SignupModule } from '@features';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { UrlInterceptor } from './interceptors/url.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouting, HttpClientModule, CoreModule, SigninModule, SignupModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
