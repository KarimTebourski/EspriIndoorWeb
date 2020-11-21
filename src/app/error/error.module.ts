import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ErrorOneComponent}  from './404/error-404.component';
import { ErrorTwoComponent}  from './503/error-503.component';

import { ErrorRoutes } from './error.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    RouterModule.forChild(ErrorRoutes)
  ],
  declarations: [ 
    ErrorOneComponent,
    ErrorTwoComponent,
  ]
})

export class ErrorModule {}
