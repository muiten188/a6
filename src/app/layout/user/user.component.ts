import { Component, OnInit, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { routerTransition } from '../../router.animation';
import { UserService } from './user.service'
// import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  public user: any = {
    currentPage: 1,
    pageSize: 10,
    totalElement: 0,
    totalPage: 0

  };
  public userSearch: any = {
    currentPage: 1, //default
    pageSize: 10, //default
  };
  // public columns: Array<any> = [
  //   { title: 'Tiêu đề', name: 'title', filtering: { filterString: '', placeholder: 'Filter by title' } },
  //   { title: 'Ngày', name: 'targetDate', pipe: new DatePipe('dd/MM/yyyy') },
  //   { title: 'Selection', name: 'selected', sort: false, selectable: true }
  // ];
  public results: Array<any> = [];

  constructor(protected userService: UserService, public ngbModal: NgbModal) {}

  ngOnInit() {
    this.onGetData(this.userSearch);
  }

  public onPageChange(page) {
    this.userSearch.currentPage = page;
    this.onGetData(this.userSearch);
  }

  private onGetData(condition) {
    this.userService.search(condition).subscribe(
      (response: any) => {
        this.results = response.data;
        this.user.currentPage = response.currentPage;
        this.user.totalElement = response.totalElement;
        this.user.totalPage = response.totalPage;
      },
      error => {
        console.log("Error ", error);
      }
    );
  }

  openModal(id: string) {
    this.ngbModal.open(id);
  }
}
