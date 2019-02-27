import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../../../shared/config';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(public http: HttpClient) { }

  getSidebar() {
    return this.http.get(AppConfig.API_GET_SIDE_BAR);
  }
}
