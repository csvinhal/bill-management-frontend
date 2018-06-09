import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BlockUiService {
  private _loading: Subject<boolean> = new Subject();
  constructor() {}

  setIsLoading(value: boolean) {
    this._loading.next(value);
  }

  getIsLoading() {
    return this._loading.asObservable();
  }
}
