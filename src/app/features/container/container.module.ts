import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerRouting } from './container.routing';
import { MainNavModule } from './main-nav/main-nave.module';

@NgModule({
  imports: [CommonModule, ContainerRouting, MainNavModule],
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
})
export class ContainerModule {}
