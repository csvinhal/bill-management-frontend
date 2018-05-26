import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ContainerModule } from './container/container.module';

const routes: Route[] = [
  {
    path: 'container',
    loadChildren: () => ContainerModule
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouting { }
