import { Component, OnInit, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { routerTransition } from '../../router.animation';
import { UserManagerService } from './user-manager.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
  animations: [routerTransition()]
})
export class UserManagerComponent implements OnInit {
  public managerUser: any = {
    currentPage: 1,
    pageSize: 10,
    totalElement: 0,
    totalPage: 0
  };
  public managerUserForm: any = {

  };
  public columns: Array<any> = [
    { title: 'Tiêu đề', name: 'title', filtering: { filterString: '', placeholder: 'Filter by title' } },
    { title: 'Ngày', name: 'targetDate', pipe: new DatePipe('dd/MM/yyyy') },
    { title: 'Selection', name: 'selected', sort: false, selectable: true }
  ];
  public arrData: Array<any> = [];
  public modalType = "CREATE";//EDIT
  constructor(protected userManagerService: UserManagerService, public ngbModal: NgbModal) {

  }

  ngOnInit() {
    this.userManagerService.search(this.managerUser).subscribe(
      (data: any) => {
        console.log("POST Request is successful ", data);
        this.arrData = data.data;
        this.managerUser.currentPage = data.currentPage;
        this.managerUser.totalElement = data.totalElement;
        this.managerUser.totalPage = data.totalPage;
      },
      error => {
        console.log("Error ", error);
      }
    );
  }

  public onPageChange(page) {
    this.managerUser.currentPage = page;
    this.userManagerService.search(this.managerUser).subscribe(
      (data: any) => {
        this.arrData = data.data;
        this.managerUser.currentPage = data.currentPage;
        this.managerUser.totalElement = data.totalElement;
        this.managerUser.totalPage = data.totalPage;
      },
      error => {
        console.log("Error ", error);
      }
    );
  }

  openModal(id: string, modalType) {
    this.modalType = modalType;
    this.ngbModal.open(id);
  }

  onAvartarFileChange(event) {

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      this.managerUserForm.avatar = event.target.files;
      const reader = new FileReader();
      reader.onload = e => {
        this.managerUserForm.avatarShow = reader.result;
        console.log(reader.result);
      }

      reader.readAsDataURL(file);
    }
  }

  onSubmit(name) {
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.managerUserForm))
    this.userManagerService.save(this.managerUserForm).subscribe(
      (data: any) => {
        console.log("POST Request is successful ", data);
        debugger;
      },
      error => {
        debugger;
        console.log("Error ", error);
      }
    );
  }
}
