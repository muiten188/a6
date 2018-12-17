import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../shared/config';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(protected http: HttpClient) { }

  login(data) {
    return this.http.post(AppConfig.API_USER_LOGIN,data);
  };
  // {
  //   "captcha": "string",
  //   "password": "123456a@",
  //   "username": "admin"
  // }
  // logout() {
  //   return this.http.put(APP.API_USER_LOGOUT);
  // }

  // getCapcha(userName) {
  //   return APP.API_CAPCHA + "?userName=" + userName + "&date=" + (new Date()).toISOString();
  // };

  // forgetPassword(data) {
  //   return this.http.post(APP.API_FORGOT_PASSWORD, data);
  // };
  // changePassword(data) {
  //   return this.http.put(APP.API_CHANGEPW, data);
  // }

}
