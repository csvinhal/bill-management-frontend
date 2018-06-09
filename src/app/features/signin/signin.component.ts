import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@core';

import { SigninService } from './signin.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private signinService: SigninService,
    private router: Router,
    private _translateService: TranslateService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4), Validators.email])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4)])),
      remember: new FormControl(),
    });
  }

  signin() {
    if (this.signinForm.valid) {
      return this.signinService.signin(this.signinForm.getRawValue()).subscribe(
        success => {
          this.toastrService.success('You successfully logged in!', 'Success');
          this.router.navigate(['container']);
        },
        exception => this.toastrService.error(exception.error.message, exception.error.title)
      );
    }

    Object.keys(this.signinForm.controls).forEach((control: string) => {
      this.signinForm.get(control).markAsTouched();
      this.signinForm.get(control).updateValueAndValidity();
    });
  }

  isFieldInvalid(field: string) {
    return this.signinForm.get(field).touched && !this.signinForm.get(field).valid;
  }

  getMinimumLength(control: string) {
    return (
      this.signinForm.get(control).errors &&
      this.signinForm.get(control).errors.minlength &&
      this.signinForm.get(control).errors.minlength.requiredLength
    );
  }

  get translateService() {
    return this._translateService;
  }
}
