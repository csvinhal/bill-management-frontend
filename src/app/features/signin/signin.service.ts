import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SigninService {

  constructor(private http: HttpClient) { }

  signin(body) {
    return this.http.post('signin', body);
  }
}
