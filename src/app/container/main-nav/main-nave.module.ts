import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';

import { MainNavComponent } from './main-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, MatExpansionModule, MatSidenavModule, MatToolbarModule],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class MainNavModule {}
