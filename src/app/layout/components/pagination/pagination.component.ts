import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { debug } from 'util';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    _test: string = '';
    _totalItems: number = 0;
    @Output() public onPageChange = new EventEmitter();
    @Output() public pageChange = new EventEmitter<number>();
    public _collectionSize:number=0;
    @Input()
    set collectionSize(value: number) {
        this._collectionSize = value;
    }
    get collectionSize() {
        return this._collectionSize;
    }
    public _page: number = 1;
    @Input()
    set page(value: number) {
        this._page = value;
        this.pageChange.emit(this.page);
    }
    get page() {
        return this._page;
    }

    public _pageSize: number = 10;
    @Input()
    set pageSize(value: number) {
        this._pageSize = value;
    }
    get pageSize() {
        return this._pageSize;
    }


    @Input()
    set totalItems(value: number) {
        this._totalItems = value;
    }

    get totalItems() {
        return this._totalItems;
    }

    constructor() {

    }

    onPageChange1(page) {
        // this.pageChange.emit(this.onPageChange(page))
        this.onPageChange.emit(page);
    }
}
