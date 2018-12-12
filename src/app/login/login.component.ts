import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animation';
import {LoginService} from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,public loginService:LoginService) { }

  ngOnInit() {
  }

  onLogin(){
    this.loginService.login().subscribe(
      data => {
          console.log("POST Request is successful ", data);
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['']);
      },
      error => {
          console.log("Error", error);
      }
  );     
  }
}
