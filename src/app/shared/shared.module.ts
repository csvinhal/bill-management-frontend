import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModule } from '../components/error-messages/error-messages.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    ErrorMessagesModule
  ],
  declarations: []
})
export class SharedModule { }
