import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../../shared/config';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(public http: HttpClient) { }

  search(data) {
    return this.http.get(AppConfig.API_EVENT,{
      params:data
    });
  }
}
