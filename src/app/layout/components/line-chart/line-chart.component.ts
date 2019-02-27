import { Component, OnInit, Input, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

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
      var chart = am4core.create(this.id, am4charts.XYChart);

      // Add data
      chart.data = data
      // debugger;

      chart.legend = new am4charts.Legend();
      chart.legend.position = "right";

      // Create axes
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "centerName";
      categoryAxis.renderer.grid.template.opacity = 0;

      var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.opacity = 0;
      valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
      valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
      valueAxis.renderer.ticks.template.length = 10;
      valueAxis.renderer.line.strokeOpacity = 0.5;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.minGridDistance = 40;

      // Create series
      function createSeries(field, name) {
        // debugger;
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "centerName";
        series.stacked = true;
        series.name = name;

        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.locationX = 0.5;
        labelBullet.label.text = "{valueX}";
        labelBullet.label.fill = am4core.color("#fff");
      }

      createSeries("motobikeUsed", "Lượng oto");
      createSeries("carUsed", "Lượng xe máy");
      createSeries("freeSlot", "Chỗ trống");
    });
  }
}
