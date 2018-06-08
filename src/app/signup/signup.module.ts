import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';

import { SignupComponent } from './signup.component';
import { SignupRouting } from './signup.routing';
import { SignupService } from './signup.service';
import { TermsConditionsModule } from './terms-conditions/terms-conditions.module';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, SignupRouting, TermsConditionsModule],
  declarations: [SignupComponent],
  providers: [SignupService],
})
export class SignupModule {}
