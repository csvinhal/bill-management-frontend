import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ToastrService } from '@core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private signupService: SignupService,
    private router: Router,
    private translateService: TranslateService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = new FormGroup({
      firstname: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ),
      lastname: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ),
      email: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.email
        ])
      ),
      password: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ),
      rpassword: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          this.isPasswordEqual.call(this)
        ])
      ),
      agreed: new FormControl(null, this.isAgreed)
    });
  }

  signup() {
    if (this.signupForm.valid) {
      return this.signupService
        .signup(this.signupForm.getRawValue())
        .subscribe(
          success => this.router.navigate(['signin']),
          exception =>
            this.toastrService.error(
              exception.error.message,
              exception.error.title
            )
        );
    }

    Object.keys(this.signupForm.controls).forEach((control: string) => {
      this.signupForm.get(control).markAsTouched();
      this.signupForm.get(control).updateValueAndValidity();
    });
  }

  isFieldInvalid(field: string) {
    return (
      this.signupForm.get(field).touched && !this.signupForm.get(field).valid
    );
  }

  getMinimumLength(control: string) {
    return (
      this.signupForm.get(control).errors &&
      this.signupForm.get(control).errors.minlength &&
      this.signupForm.get(control).errors.minlength.requiredLength
    );
  }

  isPasswordEqual(password: string) {
    return (control: AbstractControl) => {
      if (control.valid && control.value !== this.password) {
        return { not_match: true };
      }

      return null;
    };
  }

  isAgreed(control: AbstractControl) {
    return !control.value ? { not_agreed: true } : null;
  }

  get password() {
    return (
      this.signupForm &&
      this.signupForm.get('password') &&
      this.signupForm.get('password').value
    );
  }
}
