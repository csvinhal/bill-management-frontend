import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {

  @Input() control: FormControl;
  @Input() errors: any;
  messages: string[];

  constructor() { }

  ngOnInit() {
  }

  get hasError() {
    return !this.control.valid && this.control.touched;
  }

  get errorMessage() {
    this.messages = [];
    Object.keys(this.control.errors).forEach(error => {
      this.messages.push(this.errors[error]);
    });

    return this.messages;
  }

}
