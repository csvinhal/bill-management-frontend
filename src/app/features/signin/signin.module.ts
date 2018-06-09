import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { SigninComponent } from './signin.component';
import { SigninRouting } from './signin.routing';
import { SigninService } from './signin.service';

@NgModule({
  imports: [CommonModule, SharedModule, SigninRouting],
  declarations: [SigninComponent],
  exports: [SigninComponent],
  providers: [SigninService],
})
export class SigninModule {}
