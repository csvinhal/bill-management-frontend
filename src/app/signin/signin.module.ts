import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { SigninRouting } from './signin.routing';
import { SharedModule } from '../shared/shared.module';
import { SigninService } from './signin.service';

@NgModule({
  imports: [CommonModule, SharedModule, SigninRouting],
  declarations: [SigninComponent],
  exports: [SigninComponent],
  providers: [SigninService],
})
export class SigninModule {}
