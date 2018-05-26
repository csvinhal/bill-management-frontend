import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material';

import { ErrorMessagesComponent } from './error-messages.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule],
  declarations: [ErrorMessagesComponent],
  exports: [ErrorMessagesComponent],
})
export class ErrorMessagesModule {}
