import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animation';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
