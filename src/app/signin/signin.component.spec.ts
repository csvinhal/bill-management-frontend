import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared/shared.module';
import { SigninService } from './signin.service';
import { CoreModule } from '../core/core.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        }),
        SharedModule,
        CoreModule,
      ],
      declarations: [SigninComponent],
      providers: [SigninService, HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have a form error', () => {
    component.signinForm.get('email').setValue('teste@teste.com.br');
    component.signinForm.get('password').setValue('12345678');

    component.signinForm.updateValueAndValidity();

    fixture.detectChanges();
    expect(component.signinForm.valid).toBeTruthy();
  });

  it('should have controls required errors', () => {
    component.signinForm.updateValueAndValidity();

    fixture.detectChanges();
    expect(component.signinForm.valid).toBeFalsy();

    expect(fixture.debugElement.nativeElement.querySelectorAll('#email-error').length).toBe(1);
    expect(fixture.debugElement.nativeElement.querySelectorAll('#password-error').length).toBe(1);
  });

  it('should have an email error', () => {
    component.signinForm.get('email').setValue('teste');
    component.signinForm.get('password').setValue('12345678');

    component.signinForm.updateValueAndValidity();

    fixture.detectChanges();
    expect(component.signinForm.valid).toBeFalsy();

    expect(fixture.debugElement.nativeElement.querySelectorAll('#email-error').length).toBe(1);
  });
});
