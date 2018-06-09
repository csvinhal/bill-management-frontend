import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockUiComponent, DialogComponent } from './block-ui.component';
import { BlockUiService } from './block-ui.service';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // Angular material
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  exports: [BlockUiComponent],
  entryComponents: [DialogComponent],
  declarations: [BlockUiComponent, DialogComponent],
  providers: [BlockUiService],
})
export class BlockUiModule {}
