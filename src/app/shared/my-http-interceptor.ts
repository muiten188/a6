import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorage } from './localStorage';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    constructor(public localStorage: LocalStorage) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var _user = this.localStorage.getUser();
        const dummyrequest = req.clone({
            headers: new HttpHeaders({ 'JSESSIONID': _user.jsessionId })
        });
        console.log("Cloned Request");
        console.log(dummyrequest);
        return next.handle(dummyrequest)
        .pipe(
            map((event) => {
                if (event instanceof HttpResponse) {
                    // do stuff with response and headers you want
                    event.headers
                    event.body
                }
                return event;
            }),catchError((error)=> {
                console.log('error:' +error)
                throw(error);
            }))
    }
}