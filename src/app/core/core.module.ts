import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUiModule } from '@components';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastrModule } from './toastr/toastr.module';
import { TranslateHubModule } from './translate/translate-hub.module';

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
