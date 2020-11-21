import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatProgressBarModule,
        MatMenuModule,
        ChartsModule,
        NgxChartsModule,
        NgxDatatableModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}
