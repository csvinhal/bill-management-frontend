import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreModule } from '@core';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SigninModule } from './signin/signin.module';
import { SignupComponent } from './signup/signup.component';
import { SignupModule } from './signup/signup.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        SigninModule,
        SignupModule,
        RouterTestingModule.withRoutes([{ path: 'signin', component: SigninComponent }, { path: 'signup', component: SignupComponent }]),
        HttpClientTestingModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
