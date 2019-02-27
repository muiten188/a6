import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './user-manager-routing.module';
import { UserManagerComponent } from './user-manager.component';
import { StatModule } from '../../shared';
import { TranslateModule } from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    StatModule,
    SharedModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [
    UserManagerComponent]
})
export class UserManagerModule { }
