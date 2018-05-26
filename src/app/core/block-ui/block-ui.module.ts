import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUiService } from './block-ui.service';

@NgModule({
  imports: [CommonModule],
  providers: [BlockUiService]
})
export class BlockUiModule { }
