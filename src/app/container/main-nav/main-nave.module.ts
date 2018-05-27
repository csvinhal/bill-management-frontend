import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatToolbarModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, MatExpansionModule, MatSidenavModule, MatToolbarModule],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class MainNavModule {}
