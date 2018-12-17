import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { StatModule } from '../../shared';
import { TranslateModule } from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    StatModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    EventComponent]
})
export class EventModule { }
