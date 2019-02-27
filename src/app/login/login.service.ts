import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../auth/jwt-response';
import { AuthLoginInfo } from '../auth/login-info';
import { AppConfig } from '../shared/config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(protected http: HttpClient) { }

  login(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(AppConfig.API_USER_LOGIN, credentials, httpOptions);
  }
}
