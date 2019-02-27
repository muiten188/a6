import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent implements OnInit {

  private chart: am4charts.XYChart;
  @Input() public id: string
  @Input() public valueTitle: string;
  @Input() public categoryTitle: string;
  @Input() public configField:any;
  private _data: any = [];
  @Input()
  set data(value: any) {
    this._data = value;
  }
  get data() {
    return this._data;
  }

  constructor(private zone: NgZone) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.data && this.data.length > 0) {
      //this.makingChart(this.data);
    }
  }

  makingChart(data) {
    this.chart = am4core.create(this.id, am4charts.XYChart);
    this.chart.data = data;
    // debugger;
    // Create axes
    var categoryAxis = this.chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = this.categoryTitle ? this.categoryTitle : "centerName";
    categoryAxis.numberFormatter.numberFormat = "#,###";
    
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;


    var valueAxis = this.chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;

    // Create series
    var createSeries = (field, name) => {
      // debugger;
      var series = this.chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = this.categoryTitle ? this.categoryTitle : "centerName";;
      series.name = name;
      series.columns.template.tooltipText = "{name} [bold]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;

      // var valueLabel = series.bullets.push(new am4charts.LabelBullet());
      // valueLabel.label.text = "{valueX}";
      // valueLabel.label.horizontalCenter = "left";
      // valueLabel.label.dx = 10;
      // valueLabel.label.hideOversized = false;
      // valueLabel.label.truncate = false;

      var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      categoryLabel.label.text = "{name}";
      categoryLabel.label.horizontalCenter = "right";
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color("#fff");
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    }

    if(this.configField&&this.configField.length>0){
      for(var i=0;i<this.configField.length;i++){
        var item=this.configField[i];
        createSeries(item.field, item.name);
      }
    }
    // createSeries("totalMoneyCar", "Ôtô");
    // createSeries("totalMoneyMotoScooter", "Xe số");
    // createSeries("totalMoneyMotobike", "Xe ga");
  }
}
