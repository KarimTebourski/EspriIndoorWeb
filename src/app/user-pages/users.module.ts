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

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/userlist.component';

import { UsersRoutes } from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UsersRoutes),
     MatIconModule,

   FlexLayoutModule
  ],
  declarations: [ 
    UserProfileComponent,
    UserListComponent
  ]
})

export class UsersModule {}
