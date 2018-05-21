import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerRouting } from './container.routing';
import { HeaderNavModule } from './header-nav/header-nav.module';

@NgModule({
  imports: [
    CommonModule,
    ContainerRouting,
    HeaderNavModule
  ],
  declarations: [ContainerComponent],
  exports: [ContainerComponent]
})
export class ContainerModule { }
