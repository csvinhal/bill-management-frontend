import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModule } from '../components/error-messages/error-messages.module';
import { TranslateHubModule } from '../components/translate/translate-hub.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    ErrorMessagesModule,
    TranslateHubModule
  ],
  declarations: []
})
export class SharedModule { }
