import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardDetailRoutingModule} from './dashboard-detail-routing.module'
import {DashboardDetailComponent} from './dashboard-detail.component'
import {SharedModule} from '../../shared/shared.module';
import { PageHeaderModule } from '../../shared';
@NgModule({
  declarations: [DashboardDetailComponent],
  imports: [
    CommonModule,
    DashboardDetailRoutingModule,
    SharedModule,
    PageHeaderModule
  ]
})
export class DashboardDetailModule { }
