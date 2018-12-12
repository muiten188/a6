import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './shared/guard'
const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
