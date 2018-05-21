import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderNavComponent],
  exports: [HeaderNavComponent]
})
export class HeaderNavModule { }
