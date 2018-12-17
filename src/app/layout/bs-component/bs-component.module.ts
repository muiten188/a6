import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import {SharedModule} from '../../shared/shared.module'
import {
    AlertComponent,
    ButtonsComponent,
    CollapseComponent,
    DropdownComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
} from './components';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        BsComponentRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        SharedModule
    ],
    declarations: [
        BsComponentComponent,
        ButtonsComponent,
        AlertComponent,
        CollapseComponent,
        DropdownComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent
    ]
})
export class BsComponentModule {}
