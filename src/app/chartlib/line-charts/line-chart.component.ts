import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { single, multi } from './../charts.data';

@Component({
  selector: 'ms-line-charts',
  templateUrl:'./line-chart-component.html',
  styleUrls: ['./line-chart-component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class LineChartDemoComponent implements OnInit {

  public single: any[];
  public multi: any[];

  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Year';
  public showYAxisLabel = true;
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
  }; 
  public autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi}) 
  }

  ngOnInit() {}
  
  onSelect(event) {
    console.log(event);
  }
}



