import { NgModule } from '@angular/core';
import { PaginationComponent,ModalComponent,DatePickerComponent } from '../layout/bs-component/components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {CdatepickerDirective} from '../layout/directive/cdatepicker.directive';
@NgModule({
    imports: [
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [
        PaginationComponent,
        ModalComponent,
        DatePickerComponent,
        CdatepickerDirective
    ],
    exports: [
        PaginationComponent,
        ModalComponent,
        DatePickerComponent,
        CdatepickerDirective
    ]
})
export class SharedModule { }