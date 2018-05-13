import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrService } from './toastr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ToastrService]
})
export class ToastrModule { }
