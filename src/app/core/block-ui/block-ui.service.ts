import { Injectable } from '@angular/core';
import * as $ from "jquery";

@Injectable()
export class BlockUiService {
  constructor() { }

  isLoading(element, enable) {
    if (enable) {
      $(element).addClass('m-page--loading-non-block');
    } else {
      $(element).removeClass('m-page--loading-non-block');
    }
  }
}
