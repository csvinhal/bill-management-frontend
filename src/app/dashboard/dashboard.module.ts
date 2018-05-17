import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule,
    TranslateModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
