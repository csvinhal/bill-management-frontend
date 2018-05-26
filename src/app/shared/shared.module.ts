import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesModule } from '@core';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    ReactiveFormsModule,
    ErrorMessagesModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    TranslateModule,
  ],
  declarations: [],
})
export class SharedModule {}
