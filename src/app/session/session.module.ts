import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockScreenComponent } from './lockscreen/lockscreen.component';

import { SessionRoutes } from './session.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(SessionRoutes),
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  declarations: [LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LockScreenComponent,
  ]
})

export class SessionModule {}
