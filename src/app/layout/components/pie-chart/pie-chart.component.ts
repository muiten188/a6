import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  private chart: am4charts.PieChart;
  private _data: any = [];
  @Input()
  set data(value: any) {
    this._data = value;
  }
  get data() {
    return this._data;
  }
  @Input() public id: string
  @Input() public valueTitle: string;
  @Input() public categoryTitle: string;
  ngOnChanges() {
    if (this.data && this.data.length > 0) {
      
      this.makingChart(this.data, this.valueTitle, this.categoryTitle);
    }
    // this.chart.data = [{
    //   "country": "Lithuania",
    //   "litres": 501.9
    // }, {
    //   "country": "Czech Republic",
    //   "litres": 301.9
    // }]
  }
  constructor(private zone: NgZone) { }

  ngOnInit() { }

  makingChart(data, valueTitle, categoryTitle) {
    this.zone.runOutsideAngular(() => {
      this.chart = am4core.create(this.id, am4charts.PieChart3D);
      this.chart.hiddenState.properties.opacity = 0;
      this.chart.data = data
      // Add and configure Series
      let pieSeries = this.chart.series.push(new am4charts.PieSeries3D());
      pieSeries.dataFields.value = valueTitle;
      pieSeries.dataFields.category = categoryTitle;
    });
  }
}
