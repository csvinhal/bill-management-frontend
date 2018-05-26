import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from './toastr/toastr.module';
import { TranslateHubModule } from './translate/translate-hub.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { BlockUiModule } from './block-ui/block-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule],
  exports: [BrowserAnimationsModule, TranslateHubModule, BlockUiModule, ToastrModule],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
