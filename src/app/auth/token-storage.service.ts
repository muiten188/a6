import { Injectable } from '@angular/core';
 
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const UID_KEY = 'AuthUserId';
const AUTHORITIES_KEY = 'AuthAuthorities';
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }
 
  signOut() {
    window.sessionStorage.clear();
  }
 
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUID(uid: number) {
    window.sessionStorage.removeItem(UID_KEY);
    window.sessionStorage.setItem(UID_KEY, uid.toString(10));
  }
 
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
 
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
 
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }
 
  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }
 
  public getAuthorities(): string[] {
    this.roles = [];
 
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }
}