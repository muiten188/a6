import { Component, OnInit, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { routerTransition } from '../../router.animation';
import { EventService } from './event.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  animations: [routerTransition()]
})
export class EventComponent implements OnInit {
  public event: any = {
    currentPage: 1,
    pageSize: 10,
    totalElement: 0,
    totalPage: 0

  };
  public columns: Array<any> = [
    { title: 'Tiêu đề', name: 'title', filtering: { filterString: '', placeholder: 'Filter by title' } },
    { title: 'Ngày', name: 'targetDate', pipe: new DatePipe('dd/MM/yyyy') },
    { title: 'Selection', name: 'selected', sort: false, selectable: true }
    // {
    //   title: 'Position',
    //   name: 'position',
    //   sort: false,
    //   filtering: { filterString: '', placeholder: 'Filter by position' }
    // },
    // { title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc' },
    // { title: 'Extn.', name: 'ext', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' } },
    // { title: 'Start date', className: 'text-warning', name: 'startDate' }
  ];
  public arrData: Array<any> = [];
  constructor(protected eventService: EventService,public ngbModal:NgbModal) {

  }

  ngOnInit() {
    this.eventService.search(this.event).subscribe(
      (data: any) => {
        console.log("POST Request is successful ", data);
        this.arrData = data.data;
        this.event.currentPage = data.currentPage;
        this.event.totalElement = data.totalElement;
        this.event.totalPage = data.totalPage;
      },
      error => {
        console.log("Error ", error);
      }
    );
  }

  public onPageChange(page) {
    this.event.currentPage = page;
    this.eventService.search(this.event).subscribe(
      (data: any) => {
        this.arrData = data.data;
        this.event.currentPage = data.currentPage;
        this.event.totalElement = data.totalElement;
        this.event.totalPage = data.totalPage;
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
