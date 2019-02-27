import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
    model: any;
    @Output() public ngModelChange=new EventEmitter();
    protected _ngModel:any;
    @Input()
    set ngModel(value:any){
        this._ngModel=value;
        this.ngModelChange.emit(this._ngModel);
    }
    get ngModel(){
        return this._ngModel;
    }
    constructor() { }

    ngOnInit() {
    }

    datePickerFormater(event){
        
    }

}
