import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { SharedModule } from './shared/shared.module';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { AppRouting } from './app.routing';
import { CoreModule } from '@core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouting, HttpClientModule, CoreModule, SharedModule, SigninModule, SignupModule],
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
