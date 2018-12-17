import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from './localStorage';
@Injectable({
    providedIn: 'root'
})
export class CustomHttpClient {

    constructor(private http: HttpClient,public localStorage: LocalStorage) { }

    createAuthorizationHeader() {
        var _user = this.localStorage.getUser();
        return new HttpHeaders({ 'JSESSIONID': _user.jsessionId });
    }

    get(url) {
        let headers = this.createAuthorizationHeader();
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = this.createAuthorizationHeader();

        return this.http.post(url, data, {
            headers: headers
        });
    }
}