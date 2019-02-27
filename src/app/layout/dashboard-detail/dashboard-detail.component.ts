import { Component, OnInit, NgZone } from '@angular/core';
import { DashboardDetailService } from './dashboard-detail.service';
import { routerTransition } from '../../router.animation';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-dashboard-detail',
    templateUrl: './dashboard-detail.component.html',
    styleUrls: ['./dashboard-detail.component.css'],
    animations: [routerTransition()]
})
export class DashboardDetailComponent implements OnInit {
    id: any;

    public stackChartConfig=[
        {
            valueY:'carTicketMonth',
            name:'carTicketMonth'
        },
        {
            valueY:'carTicketTurn',
            name:'carTicketTurn'
        },{
            valueY:'motoTicketMonth',
            name:'motoTicketMonth'
        },
        {
            valueY:'motoTicketTurn',
            name:'motoTicketTurn'
        }
    ]

    public configField=[
        {
            field:'value',
            name:''
        },
    ]
    private sub: any;
    public total_revenueToday: [];
    public total_MoneyByVehicle: [];
    public total_RevenueByMonth: [];

    constructor(private zone: NgZone,
        public dashboardDetailService: DashboardDetailService,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.cngOnInit(); // reset and set based on new parameter this time
        });

    }
    ngOnInit(){

    }
    cngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });

        this.dashboardDetailService.getRevenueToday(this.id).subscribe(
            (data: any) => {
                this.total_revenueToday = data;
            },
            error => {
                console.log("Error ", error);
            }
        );
        //
        this.dashboardDetailService.getTotalMoneyByVehicle(this.id).subscribe(
            (data: any) => {
                this.total_MoneyByVehicle = data;
            },
            error => {
                console.log("Error ", error);
            }
        );
        //
        this.dashboardDetailService.getREVENUE_BY_MONTH(this.id).subscribe(
            (data: any) => {
                this.total_RevenueByMonth = data;
            },
            error => {
                console.log("Error ", error);
            }
        );
    }

}
