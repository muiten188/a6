import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-stack-chart',
  templateUrl: './stack-chart.component.html',
  styleUrls: ['./stack-chart.component.css']
})
export class StackChartComponent implements OnInit {

  private chart: am4charts.XYChart;
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
  @Input() public configField: any;
  ngOnChanges() {
    if (this.data && this.data.length > 0) {
      this.makingChart(this.data, this.valueTitle, this.categoryTitle,this.configField);
    }
  }
  constructor(private zone: NgZone) { }

  ngOnInit() { }

  makingChart(data, valueTitle, categoryTitle,configField) {
    this.zone.runOutsideAngular(() => {
      var chart = am4core.create(this.id, am4charts.XYChart);
      
      
      var _data=[];
      for(var i=0;i<data.length;i++){
        var item=data[i];
        item.month=''+item.month+'';
        _data.push(item);
      }
      chart.data = _data;
      // debugger;
      chart.dateFormatter.inputDateFormat = "yyyy";
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.5;
      dateAxis.baseInterval = {
        timeUnit: "month",
        count: 1
      }

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      if (configField && configField.length > 0) {
        for (var i = 0; i < configField.length; i++) {
          var item = configField[i];
          console.log("item",item);
          var series = chart.series.push(new am4charts.LineSeries());

          series.name = item.name;
          series.dataFields.dateX = "month";
          series.dataFields.valueY = item.valueY;
          series.tooltipHTML = `<span style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>${item.name}: {valueY.value}</b></span>`;
          series.tooltip.background.fill = am4core.color("#FFF");
          series.tooltip.getStrokeFromObject = true;
          series.tooltip.background.strokeWidth = 3;
          series.tooltip.getFillFromObject = false;
          series.fillOpacity = 0.6;
          series.strokeWidth = 2;
          series.stacked = true;
        }
      }
      

      // var series3 = chart.series.push(new am4charts.LineSeries());
      // series3.name = "bicycles";
      // series3.dataFields.dateX = "month";
      // series3.dataFields.valueY = "bicycles";
      // series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
      // series3.tooltip.background.fill = am4core.color("#FFF");
      // series3.tooltip.getFillFromObject = false;
      // series3.tooltip.getStrokeFromObject = true;
      // series3.tooltip.background.strokeWidth = 3;
      // series3.sequencedInterpolation = true;
      // series3.fillOpacity = 0.6;
      // series3.defaultState.transitionDuration = 1000;
      // series3.stacked = true;
      // series3.strokeWidth = 2;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis;
      chart.scrollbarX = new am4core.Scrollbar();

      // Add a legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = "top";

      // axis ranges
      var range = dateAxis.axisRanges.create();
      range.date = new Date(2018, 1, 1);
      range.endDate = new Date(2018, 12, 30);
      range.axisFill.fill = chart.colors.getIndex(7);
      range.axisFill.fillOpacity = 0.2;

      // range.label.text = "Fines for speeding increased";
      range.label.inside = true;
      range.label.rotation = 90;
      range.label.horizontalCenter = "right";
      range.label.verticalCenter = "middle";

      var range2 = dateAxis.axisRanges.create();
      range2.date = new Date(2018, 1, 1);
      range2.grid.stroke = chart.colors.getIndex(7);
      range2.grid.strokeOpacity = 0.6;
      range2.grid.strokeDasharray = "5,2";


      range2.label.text = "Motorcycle fee introduced";
      range2.label.inside = true;
      range2.label.rotation = 90;
      range2.label.horizontalCenter = "right";
      range2.label.verticalCenter = "middle";
    });
  }
  // ngAfterViewInit() {
  //   var chart = am4core.create("stackChart", am4charts.XYChart);

  //   chart.data = [{
  //     "month": "1994",
  //     "cars": 1587,
  //     "motorcycles": 650,
  //     "bicycles": 121
  //   }, {
  //     "month": "1995",
  //     "cars": 1567,
  //     "motorcycles": 683,
  //     "bicycles": 146
  //   }, {
  //     "month": "1996",
  //     "cars": 1617,
  //     "motorcycles": 691,
  //     "bicycles": 138
  //   }, {
  //     "month": "1997",
  //     "cars": 1630,
  //     "motorcycles": 642,
  //     "bicycles": 127
  //   }, {
  //     "month": "1998",
  //     "cars": 1660,
  //     "motorcycles": 699,
  //     "bicycles": 105
  //   }, {
  //     "month": "1999",
  //     "cars": 1683,
  //     "motorcycles": 721,
  //     "bicycles": 109
  //   }, {
  //     "month": "2000",
  //     "cars": 1691,
  //     "motorcycles": 737,
  //     "bicycles": 112
  //   }, {
  //     "month": "2001",
  //     "cars": 1298,
  //     "motorcycles": 680,
  //     "bicycles": 101
  //   }, {
  //     "month": "2002",
  //     "cars": 1275,
  //     "motorcycles": 664,
  //     "bicycles": 97
  //   }, {
  //     "month": "2003",
  //     "cars": 1246,
  //     "motorcycles": 648,
  //     "bicycles": 93
  //   }, {
  //     "month": "2004",
  //     "cars": 1318,
  //     "motorcycles": 697,
  //     "bicycles": 111
  //   }, {
  //     "month": "2005",
  //     "cars": 1213,
  //     "motorcycles": 633,
  //     "bicycles": 87
  //   }, {
  //     "month": "2006",
  //     "cars": 1199,
  //     "motorcycles": 621,
  //     "bicycles": 79
  //   }, {
  //     "month": "2018",
  //     "cars": 1110,
  //     "motorcycles": 210,
  //     "bicycles": 81
  //   }, {
  //     "month": "2008",
  //     "cars": 1165,
  //     "motorcycles": 232,
  //     "bicycles": 75
  //   }, {
  //     "month": "2009",
  //     "cars": 1145,
  //     "motorcycles": 219,
  //     "bicycles": 88
  //   }, {
  //     "month": "2010",
  //     "cars": 1163,
  //     "motorcycles": 201,
  //     "bicycles": 82
  //   }, {
  //     "month": "2011",
  //     "cars": 1180,
  //     "motorcycles": 285,
  //     "bicycles": 87
  //   }, {
  //     "month": "2012",
  //     "cars": 1159,
  //     "motorcycles": 277,
  //     "bicycles": 71
  //   }];

  //   chart.dateFormatter.inputDateFormat = "yyyy";
  //   var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //   dateAxis.renderer.minGridDistance = 60;
  //   dateAxis.startLocation = 0.5;
  //   dateAxis.endLocation = 0.5;
  //   dateAxis.baseInterval = {
  //     timeUnit: "month",
  //     count: 1
  //   }

  //   var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //   valueAxis.tooltip.disabled = true;

  //   var series = chart.series.push(new am4charts.LineSeries());
  //   series.dataFields.dateX = "month";
  //   series.name = "cars";
  //   series.dataFields.valueY = "cars";
  //   series.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
  //   series.tooltip.background.fill = am4core.color("#FFF");
  //   series.tooltip.getStrokeFromObject = true;
  //   series.tooltip.background.strokeWidth = 3;
  //   series.tooltip.getFillFromObject = false;
  //   series.fillOpacity = 0.6;
  //   series.strokeWidth = 2;
  //   series.stacked = true;

  //   var series2 = chart.series.push(new am4charts.LineSeries());
  //   series2.name = "motorcycles";
  //   series2.dataFields.dateX = "month";
  //   series2.dataFields.valueY = "motorcycles";
  //   series2.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
  //   series2.tooltip.background.fill = am4core.color("#FFF");
  //   series2.tooltip.getFillFromObject = false;
  //   series2.tooltip.getStrokeFromObject = true;
  //   series2.tooltip.background.strokeWidth = 3;
  //   series2.sequencedInterpolation = true;
  //   series2.fillOpacity = 0.6;
  //   series2.stacked = true;
  //   series2.strokeWidth = 2;

  //   var series3 = chart.series.push(new am4charts.LineSeries());
  //   series3.name = "bicycles";
  //   series3.dataFields.dateX = "month";
  //   series3.dataFields.valueY = "bicycles";
  //   series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
  //   series3.tooltip.background.fill = am4core.color("#FFF");
  //   series3.tooltip.getFillFromObject = false;
  //   series3.tooltip.getStrokeFromObject = true;
  //   series3.tooltip.background.strokeWidth = 3;
  //   series3.sequencedInterpolation = true;
  //   series3.fillOpacity = 0.6;
  //   series3.defaultState.transitionDuration = 1000;
  //   series3.stacked = true;
  //   series3.strokeWidth = 2;

  //   chart.cursor = new am4charts.XYCursor();
  //   chart.cursor.xAxis = dateAxis;
  //   chart.scrollbarX = new am4core.Scrollbar();

  //   // Add a legend
  //   chart.legend = new am4charts.Legend();
  //   chart.legend.position = "top";

  //   // axis ranges
  //   var range = dateAxis.axisRanges.create();
  //   range.date = new Date(2001, 1, 1);
  //   range.endDate = new Date(2003, 1, 1);
  //   range.axisFill.fill = chart.colors.getIndex(7);
  //   range.axisFill.fillOpacity = 0.2;

  //   range.label.text = "Fines for speeding increased";
  //   range.label.inside = true;
  //   range.label.rotation = 90;
  //   range.label.horizontalCenter = "right";
  //   range.label.verticalCenter = "middle";

  //   var range2 = dateAxis.axisRanges.create();
  //   range2.date = new Date(2018, 1, 1);
  //   range2.grid.stroke = chart.colors.getIndex(7);
  //   range2.grid.strokeOpacity = 0.6;
  //   range2.grid.strokeDasharray = "5,2";


  //   range2.label.text = "Motorcycle fee introduced";
  //   range2.label.inside = true;
  //   range2.label.rotation = 90;
  //   range2.label.horizontalCenter = "right";
  //   range2.label.verticalCenter = "middle";
  // }
}