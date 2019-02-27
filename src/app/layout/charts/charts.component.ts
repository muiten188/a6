import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../router.animation';
import { ChartsService } from './charts.service';
import { ResponseEntities } from '../domain/data';
import { StackBar } from '../domain/stack';
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    public configChart=[
        {
            field:'totalMoneyCar',
            name:'Ôtô'
        },
        {
            field:'totalMoneyMotoScooter',
            name:'Xe số'
        },
        {
            field:'totalMoneyMotobike',
            name:'Xe ga'
        }
    ]
    public stackChartConfig=[
        {
            valueY:'Helios-1',
            name:'Helios-1'
        },
        {
            valueY:'QTSC-9',
            name:'QTSC-9'
        }
    ]
    public total_money_today: [];
    public total_MoneyByVehicle: [];
    public total_Money: [];
    public total_Money_By_Year: any;
    constructor(private zone: NgZone, public chartsService: ChartsService) { }

    ngOnInit() {
        this.chartsService.getRevenueToday().subscribe(
            (data: any) => {
                this.total_money_today = data;
            },
            error => {
                console.log("Error ", error);
            }
        );
        //
        this.chartsService.getTotalMoneyByVehicle().subscribe(
            (data: any) => {
                this.total_MoneyByVehicle = data;
            },
            error => {
                console.log("Error ", error);
            }
        );
        //
        this.chartsService.getTransaction_By_Center().subscribe(
            (data: any) => {
                this.total_Money = data;
            },
            error => {
                console.log("Error ", error);
            }
        );

        this.chartsService.getTotalMoneyByYear().subscribe(
            (data: any) => {
                var result = [];
                data.forEach(e => {
                    result.push(e.data);
                });
                this.total_Money_By_Year = result;
            },
            error => {
                console.log("Error ", error);
            }
        );
        // this.chartsService.getTotalMoneyByYear().subscribe(
        //     (data: Array<ResponseEntities>) => {
        //         var temps = Array<ResponseEntities>();
        //         var maps = Array<Map<String, number>>();
        //         temps = data;
        //         temps.forEach(t => {
        //             maps.push(t.data);
        //         });
        //         this.total_Money_By_Year = maps;
        //     },
        //     error => {
        //         console.log("Error ", error);
        //     }
        // );
    }
}
