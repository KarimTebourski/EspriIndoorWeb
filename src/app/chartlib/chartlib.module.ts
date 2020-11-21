import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { Ng2ChartsComponent } from './ng2-charts/ng2charts.component';
import { BarChartComponent}  from './bar-charts/bar-chart.component';
import { PieChartDemoComponent}  from './pie-charts/pie-chart.component';
import { LineChartDemoComponent}  from './line-charts/line-chart.component';
import { MixedChartDemoComponent}  from './mixed-charts/mixed-chart.component';
import { ChartlibRoutes } from './chartlib.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChartlibRoutes),
    ChartsModule,
    NgxChartsModule,
    MatCardModule,
    FlexLayoutModule
   ],
  declarations: [ 
      Ng2ChartsComponent,
      BarChartComponent,
      PieChartDemoComponent,
      LineChartDemoComponent,
      MixedChartDemoComponent
   ]
})

export class ChartlibModule {}
