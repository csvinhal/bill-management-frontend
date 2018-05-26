import { EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

export class TranslateServiceStub {

  onLangChange: EventEmitter<any> = new EventEmitter();
  onTranslationChange: EventEmitter<any> = new EventEmitter();
  onDefaultLangChange: EventEmitter<any> = new EventEmitter();

  setDefaultLang(lang: string): void {
    return;
  }

  use(lang: string): Observable<any> {
    return of(lang);
  }

  addLangs(langs: Array<string>): void {
    return;
  }

  get(key: string | Array<string>, interpolateParams?: Object): Observable<string | any> {
    return of(key);
  }
}
