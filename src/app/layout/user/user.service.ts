import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../../shared/config';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient) { }

  search(data) {
    return this.http.get(AppConfig.API_USER,{
      params:data
    });
  }
}
