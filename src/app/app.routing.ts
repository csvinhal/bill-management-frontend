import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouting {}
