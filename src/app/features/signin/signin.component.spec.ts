import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorMessagesModule, ToastrModule } from '@core';
import { SignupComponent, SignupModule } from '@features';
import { TranslateModule } from '@ngx-translate/core';

import { SigninComponent } from './signin.component';
import { SigninService } from './signin.service';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let router: Router;
  let location: Location;
  let element: HTMLElement;

  const updateForm = () => {
    Object.keys(component.signinForm.controls).forEach((control: string) => {
      component.signinForm.get(control).markAsTouched();
      component.signinForm.get(control).updateValueAndValidity();
    });
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([{ path: 'signin', component: SigninComponent }, { path: 'signup', component: SignupComponent }]),
        SignupModule,
        // Components
        ErrorMessagesModule,
        ToastrModule,
        // Translate
        TranslateModule.forRoot(),
        // Angular material
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [SigninComponent],
      providers: [SigninService, HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
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
    expect(component.signinForm).toBeTruthy();
    expect(component.signinForm.valid).toBeTruthy();
  });

  it('should have controls required errors', () => {
    component.signinForm.updateValueAndValidity();
    updateForm();

    fixture.detectChanges();
    expect(component.signinForm.valid).toBeFalsy();

    expect(element.querySelector('#email-error')).toBeTruthy();
    expect(element.querySelector('#password-error')).toBeTruthy();
  });

  it('should have an email error', () => {
    component.signinForm.get('email').setValue('teste');
    component.signinForm.get('password').setValue('12345678');

    component.signinForm.updateValueAndValidity();
    updateForm();

    fixture.detectChanges();
    expect(component.signinForm.valid).toBeFalsy();

    expect(element.querySelector('#email-error')).toBeTruthy();
  });

  it(
    'should go to signin',
    fakeAsync(() => {
      router = TestBed.get(Router);
      location = TestBed.get(Location);

      router.initialNavigation();
      fixture.detectChanges();

      router.navigate(['/signin']).then(() => {
        expect(location.path()).toBe('/signin');
        element.querySelector('#btn-signup').dispatchEvent(new MouseEvent('click'));
        tick();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
          expect(location.path()).toBe('/signup');
        });
      });
    })
  );
});
