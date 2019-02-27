import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { StatModule } from '../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    StatModule,
    // Ng2SmartTableModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    UserComponent]
})
export class UserModule { }
