import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { SharedModule } from './shared/shared.module';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { ToastrModule } from './components/toastr/toastr.module';
import { AppRouting } from './app.routing';
import { TranslateHubModule } from './components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    TranslateHubModule,
    HttpClientModule,
    ToastrModule,
    SharedModule,
    SigninModule,
    SignupModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
