import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
@Component({
  selector: 'app-axis-chart',
  templateUrl: './axis-chart.component.html',
  styleUrls: ['./axis-chart.component.css']
})
export class AxisChartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      var chart = am4core.create("axis-chart", am4charts.XYChart);
      chart.data = [{
        "month": "Th 10",
        "helios1": 0,
        "helois2": 0,
        "QTSC9": 0
      }, {
        "month": "Th 11",
        "helios1": 0,
        "helois2": 0,
        "QTSC9": 0
      }, {
        "month": "Th 12",
        "helios1": 0,
        "helois2": 0,
        "QTSC9": 0}];

      // Create category axis
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "month";
      categoryAxis.renderer.opposite = true;

      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = true;
      valueAxis.title.text = "Số khách hàng đăng kí mới trong 3 tháng";
      valueAxis.renderer.minLabelPosition = 0.01;

      // Create series
      var series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "helios1";
      series1.dataFields.categoryX = "month";
      series1.name = "Helios 1";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{name} in {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      var series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "helios2";
      series2.dataFields.categoryX = "month";
      series2.name = 'Helios 2';
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "{name} in {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      var series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "QTSC9";
      series3.dataFields.categoryX = "month";
      series3.name = 'QTSC 9';
      series3.strokeWidth = 3;
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "{name} in {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
    });
  }

}
