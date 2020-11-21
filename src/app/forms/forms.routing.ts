import { Routes } from '@angular/router';

import { FormUploadComponent } from './form-upload/form-upload.component';
import { EditorComponent } from './editor/editor.component';

export const FormRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'upload',
      component: FormUploadComponent
    }, {
      path: 'editor',
      component: EditorComponent
    }]
  }
];
