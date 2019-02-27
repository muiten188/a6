import { NgModule } from '@angular/core';
import {
    PaginationComponent,
    ModalComponent,
    DatePickerComponent,
    PieChartComponent,
    AxisChartComponent,
    ClusteredChartComponent,
    StackChartComponent,
    LineChartComponent,
    CardChartComponent
} from '../layout/components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [
        PaginationComponent,
        ModalComponent,
        DatePickerComponent,
        PieChartComponent,
        AxisChartComponent,
        ClusteredChartComponent,
        CardChartComponent,
        StackChartComponent,
        LineChartComponent
    ],
    exports: [
        PaginationComponent,
        ModalComponent,
        DatePickerComponent,
        PieChartComponent,
        AxisChartComponent,
        ClusteredChartComponent,
        CardChartComponent,
        StackChartComponent,
        LineChartComponent
    ]
})
export class SharedModule { }