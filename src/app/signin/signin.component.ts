import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';
import { ToastrService } from '@core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private signinService: SigninService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signinForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
      'remember': new FormControl(),
    });
  }

  signin() {
    debugger;
    return this.signinService.signin(this.signinForm.getRawValue()).subscribe(
      success => {
        this.toastrService.success('You successfully logged in!', 'Success');

        this.router.navigate(['dashboard']);
      },
      exception => {
        this.toastrService.error(exception.error.message, exception.error.title);
      });
  }

}
