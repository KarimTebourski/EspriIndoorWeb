import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlankComponent } from './blank/blank.component';

import { PagesRoutes } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
     
FormsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
   FlexLayoutModule
  ],
  declarations: [ 
    AboutComponent,
    ContactComponent,
    TimelineComponent,
    PricingComponent,
    BlankComponent,
  ]
})

export class PagesDemoModule {}
