import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(body) {
    console.log(body);
    return this.http.post('signup', body);
  }
}
