import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModule } from '../components/error-messages/error-messages.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    ErrorMessagesModule,
    TranslateModule
  ],
  declarations: []
})
export class SharedModule { }
