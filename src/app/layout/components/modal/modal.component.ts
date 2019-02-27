import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    closeResult: string;
    constructor(private modalService: NgbModal) { }
    public _modalTitle:string='';
    @Input()
    set modalTitle(value:string){

        this._modalTitle=value;
    }
    get modalTitle(){
        return this._modalTitle;
    }
    
    @Output() public closeModal=new EventEmitter();

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    onCloseModal(){
        this.closeModal.emit();
    }
}
