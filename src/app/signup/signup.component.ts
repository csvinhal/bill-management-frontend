import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private signupService: SignupService,
    private router: Router,
    private translateService: TranslateService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'rpassword': new FormControl(),
      'agreed': new FormControl(null, Validators.required),
    });
  }

  signup() {
    return this.signupService.signup(this.signupForm.getRawValue()).subscribe(
      success => {
        this.router.navigate(['signin']);
      },
      error => {
        console.log(error);
      });
  }

  isFieldInvalid(field: string) {
    return this.signupForm.get(field).touched && !this.signupForm.get(field).valid;
  }
}
