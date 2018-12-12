import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
