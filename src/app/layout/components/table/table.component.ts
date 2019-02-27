import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  protected _data: Array<any> = [];
  public _totalItem: number = 0;

  @Output() public onPageChange = new EventEmitter();

  @Input()
  set totalItem(value: number) {
    this._totalItem = value;
  }
  get totalItem() {
    return this._totalItem;
  }
  public _totalPage: number = 0;
  @Input()
  set totalPage(value: number) {
    this._totalPage = value;
  }
  get totalPage() {
    return this._totalPage;
  }

  @Input()
  set data(value: any) {
    this._data = value;
    //this.onChangeTable(this.config, 1);
  }
  get data() {
    return this._data;
  }
  protected _rows: Array<any> = [];

  @Input()
  set rows(value: any) {
    this._rows = value;
  }
  get rows() {
    return this._rows;
  }

  public _page: number = 1;
  @Input()
  set page(value: number) {
    this._page = value;
  }
  get page() {
    return this._page;
  }

  public _itemsPerPage: number = 7;
  @Input()
  set itemsPerPage(value: number) {
    this._itemsPerPage = value;
  }
  get itemsPerPage() {
    return this._itemsPerPage;
  }

  public _maxSize: number = 5;
  @Input()
  set maxSize(value: number) {
    this._maxSize = value;
  }
  get maxSize() {
    return this._maxSize;
  }

  protected _length: number = 0;
  @Input()
  set length(value: number) {
    this._length = value;
  }
  get length() {
    return this._length;
  }

  public constructor() {
    this.length = this.data.length;
  }

  public ngOnInit(): void {
    // this.onChangeTable(this.config);
  }

  public onPageChangeTable(page) {
    this.onPageChange.emit(page);
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page - 1) * this.itemsPerPage;
    let end = this.itemsPerPage > -1 ? (start + this.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  // public changeSort(data: any, config: any): any {
  //   if (!config.sorting) {
  //     return data;
  //   }

  //   let columns = this.config.sorting.columns || [];
  //   let columnName: string = void 0;
  //   let sort: string = void 0;

  //   for (let i = 0; i < columns.length; i++) {
  //     if (columns[i].sort !== '' && columns[i].sort !== false) {
  //       columnName = columns[i].name;
  //       sort = columns[i].sort;
  //     }
  //   }

  //   if (!columnName) {
  //     return data;
  //   }

  //   // simple sorting
  //   return data.sort((previous: any, current: any) => {
  //     if (previous[columnName] > current[columnName]) {
  //       return sort === 'desc' ? -1 : 1;
  //     } else if (previous[columnName] < current[columnName]) {
  //       return sort === 'asc' ? -1 : 1;
  //     }
  //     return 0;
  //   });
  // }

  // public changeFilter(data: any, config: any): any {
  //   let filteredData: Array<any> = data;
  //   this.columns.forEach((column: any) => {
  //     if (column.filtering) {
  //       filteredData = filteredData.filter((item: any) => {
  //         return item[column.name].match(column.filtering.filterString);
  //       });
  //     }
  //   });

  //   if (!config.filtering) {
  //     return filteredData;
  //   }

  //   if (config.filtering.columnName) {
  //     return filteredData.filter((item: any) =>
  //       item[config.filtering.columnName].match(this.config.filtering.filterString));
  //   }

  //   // let tempArray: Array<any> = [];
  //   // filteredData.forEach((item: any) => {
  //   //   let flag = false;
  //   //   this.columns.forEach((column: any) => {
  //   //     if (item[column.name].toString().match(this.config.filtering.filterString)) {
  //   //       flag = true;
  //   //     }
  //   //   });
  //   //   if (flag) {
  //   //     tempArray.push(item);
  //   //   }
  //   // });
  //   // filteredData = tempArray;

  //   return filteredData;
  // }

  // public onChangeTable(config: any = this.config, page: number = this.page): any {
  //   if (config.filtering) {
  //     Object.assign(this.config.filtering, config.filtering);
  //   }

  //   if (config.sorting) {
  //     Object.assign(this.config.sorting, config.sorting);
  //   }

  //   let filteredData = this.changeFilter(this.data, this.config);
  //   let sortedData = this.changeSort(filteredData, this.config);
  //   this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
  //   this.length = sortedData.length;
  // }

  public onCellClick(data: any): any {
    console.log(data);
  }

}
