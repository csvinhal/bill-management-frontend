import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRouting } from './signup.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SignupRouting
  ],
  declarations: [SignupComponent],
  providers: [SignupService]
})
export class SignupModule { }
