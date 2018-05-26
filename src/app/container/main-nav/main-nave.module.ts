import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class MainNavModule {}
