import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animation';
import { LoginService } from './login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(public router: Router,
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    private translate: TranslateService, 
    private toastrService:ToastrService,
    vcr: ViewContainerRef) {
  }
  login = {
    username: 'admin',
    password: '123456a@'
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  onLogin() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.login).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['']);
      },
      error => {
        this.toastrService.error(this.translate.instant('LoginFail'), this.translate.instant('TitleMes'));
      }
    );
  }
}
