import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { single, multi } from './../charts.data';

@Component({
  selector: 'ms-bar-charts',
  templateUrl:'./bar-chart-component.html',
  styleUrls: ['./bar-chart-component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class BarChartComponent implements OnInit {

  public single: any[];
  public multi: any[]; 

  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Country';
  public showYAxisLabel = true;
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
  };

    constructor() {
      Object.assign(this, {single, multi});
    }

    ngOnInit() {
    }

    public onSelect(event) {
    console.log(event);
  }
}

