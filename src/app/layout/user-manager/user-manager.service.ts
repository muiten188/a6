import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AppConfig } from '../../shared/config';
import { Observable } from 'rxjs';
const HttpUploadOptions = {
  headers: new HttpHeaders({reportProgress: 'true', responseType: 'text', contentType:'multipart/form-data' })
}
@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor(public http: HttpClient) { }

  search(data) {
    return this.http.get(AppConfig.API_USER_PAGING, {
      params: data
    });
  }

  save(data) {
    debugger;
    let input = new FormData();
    // Add your values in here
    if (data.avatar && data.avatar.length > 0) {
      input.append('avatar', data.avatar[0]);
    }
    debugger;
    let bDate = data.birthdate.day +'/'+ data.birthdate.month +'/'+ data.birthdate.year;
    input.append('birthdate', bDate);
    input.append('gender', data.gender);
    input.append('name', data.name);
    input.append('password', data.password);
    input.append('roleId', data.roleId);
    input.append('username', data.username);
    return this.http.post(AppConfig.API_USER_SAVE, input, HttpUploadOptions);
  }
}
