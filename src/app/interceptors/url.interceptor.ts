import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('://') && !request.url.includes('assets/local')) {
      const apiReq = request.clone({ url: `http://localhost:3000/${request.url}` });
      return next.handle(apiReq);
    }
    return next.handle(request);
  }
}
