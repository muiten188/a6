import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animation';
import { LoginService } from './login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
// import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(public router: Router,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private toastrService: ToastrService,
    private loginService: LoginService,
    private tokenStorage: TokenStorageService,
    vcr: ViewContainerRef) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }

    this.loginInfo = new AuthLoginInfo(
      this.loginForm.controls.username.value,
      this.loginForm.controls.password.value);

    this.loginService.login(this.loginInfo).subscribe(
      data => {
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.userInfo.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveUID(data.userInfo.uid);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.sessionStorage.setItem('isLoggedIn','true');
        this.router.navigate(['charts']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.toastrService.error(this.translate.instant('LoginFail'), this.translate.instant('TitleMes'));
      }
    );
  }
}
