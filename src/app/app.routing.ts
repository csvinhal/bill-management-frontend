import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'container',
    loadChildren: './container/container.module#ContainerModule',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRouting {}
