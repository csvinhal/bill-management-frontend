import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@core';
import { SigninComponent, SigninModule, SignupComponent, SignupModule } from '@features';

import { AppComponent } from './app.component';

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
