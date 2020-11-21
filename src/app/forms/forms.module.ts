import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileUploadModule } from 'ng2-file-upload';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormRoutes } from './forms.routing';
import { FormUploadComponent } from './form-upload/form-upload.component';

import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,

   ],
  declarations: [
    FormUploadComponent,
    EditorComponent
  ],
})

export class FormModule {}
