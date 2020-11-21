import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './shared/demo.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { JazzDialogComponent } from './material/dialog/dialog.component';
import { CalendarDialogComponent } from './apps/fullcalendar/fullcalendar.component';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import {UserService} from './services/users.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from  '@angular/material/table';
import {  MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from  '@angular/material/button';
import { HeatmapComponent } from './heatmap/heatmap.component';
import {AgmCoreModule} from '@agm/core';
import { StatisticalComponent } from './statistical/statistical.component';
import { ChartsModule } from 'ng2-charts';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    JazzDialogComponent,
    CalendarDialogComponent,
    HeatmapComponent,
    StatisticalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
    FormsModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    ChartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCardModule,
    DemoMaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQmoH7gX84YsMUeEQ9wh0PAWmWrpBylKw' + '&libraries=visualization'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FlexLayoutModule,
    PerfectScrollbarModule,
    DashboardModule
  ],
  providers: [
    TranslateService,
      UserService,
    {
       provide: PERFECT_SCROLLBAR_CONFIG,
       useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [JazzDialogComponent, CalendarDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
