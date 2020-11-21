import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { single, multi } from './../charts.data';

@Component({
  selector: 'ms-pie-charts',
  templateUrl:'./pie-chart-component.html',
  styleUrls: ['./pie-chart-component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class PieChartDemoComponent implements OnInit {

public single: any[];
  public multi: any[];
 
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor() {
    Object.assign(this, {single}); 
  }

    ngOnInit() {
    }
  
  public onSelect(event) {
    console.log(event);
  }
	
}



