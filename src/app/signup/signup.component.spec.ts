import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorMessagesModule, ToastrModule } from '@core';
import { TranslateModule } from '@ngx-translate/core';

import { SignupComponent } from './signup.component';
import { SignupService } from './signup.service';
import { TermsConditionsModule } from './terms-conditions/terms-conditions.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let element: HTMLElement;

  const updateForm = () => {
    Object.keys(component.signupForm.controls).forEach((control: string) => {
      component.signupForm.get(control).markAsTouched();
      component.signupForm.get(control).updateValueAndValidity();
    });
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        TermsConditionsModule,
        // Components
        ErrorMessagesModule,
        ToastrModule,
        // Translate
        TranslateModule.forRoot(),
        // Angular material
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [SignupComponent],
      providers: [SignupService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should all fields have error', () => {
    updateForm();

    fixture.detectChanges();
    expect(component.signupForm.valid).toBeFalsy();

    expect(element.querySelector('#firstname-error')).toBeTruthy();
    expect(element.querySelector('#lastname-error')).toBeTruthy();
    expect(element.querySelector('#email-error')).toBeTruthy();
    expect(element.querySelector('#password-error')).toBeTruthy();
    expect(element.querySelector('#rpassword-error')).toBeTruthy();
    expect(element.querySelector('#agreed-error')).toBeTruthy();
  });

  it('should not have form error', () => {
    component.signupForm.get('firstname').setValue('Mock');
    component.signupForm.get('lastname').setValue('Test');
    component.signupForm.get('email').setValue('mock.test@test.com.br');
    component.signupForm.get('password').setValue('123456');
    component.signupForm.get('rpassword').setValue('123456');
    component.signupForm.get('agreed').setValue(true);

    fixture.detectChanges();

    expect(component.signupForm.valid).toBeTruthy();
  });

  it('should match password', () => {
    component.signupForm.get('password').setValue('123456');
    component.signupForm.get('rpassword').setValue('123456');

    updateForm();
    fixture.detectChanges();

    expect(element.querySelector('#rpassword-error')).toBeFalsy();
  });

  it('should not match password', () => {
    component.signupForm.get('password').setValue('12345');
    component.signupForm.get('rpassword').setValue('123456');

    updateForm();
    fixture.detectChanges();

    expect(element.querySelector('#rpassword-error')).toBeTruthy();
  });
});
