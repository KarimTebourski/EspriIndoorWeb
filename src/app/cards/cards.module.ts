import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BasicCardComponent } from './basic/basic-card.component';
import { ModernCardComponent } from './modern/modern-card.component';

import { CardsRoutes } from './cards.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CardsRoutes),
     MatIconModule,

   FlexLayoutModule
  ],
  declarations: [ 
    BasicCardComponent,
    ModernCardComponent
  ]
})

export class CardsDemoModule {}
