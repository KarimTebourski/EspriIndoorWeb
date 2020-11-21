import { Routes } from '@angular/router';

import { Ng2ChartsComponent } from './ng2-charts/ng2charts.component';
import { BarChartComponent}  from './bar-charts/bar-chart.component';
import { PieChartDemoComponent}  from './pie-charts/pie-chart.component';
import { LineChartDemoComponent}  from './line-charts/line-chart.component';
import { MixedChartDemoComponent}  from './mixed-charts/mixed-chart.component';

export const ChartlibRoutes: Routes = [{
  path: '',
  redirectTo: 'ng2-charts',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'ng2-charts',
    component: Ng2ChartsComponent
   }, {
    path: 'bar-charts',
    component: BarChartComponent
  }, {
    path: 'pie-charts',
    component: PieChartDemoComponent
  }, {
    path: 'line-charts',
    component: LineChartDemoComponent
  }, {
    path: 'mixed-charts',
    component: MixedChartDemoComponent
  }]
}];
