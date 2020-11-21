import { Routes } from '@angular/router';

import { CropperComponent}  from './image-cropper/image-cropper.component';
import { ColorPickerComponent}  from './color-picker/color-picker.component';
import { DragulaDemoComponent}  from './dragula/dragula.component';
import { SortableDemoComponent}  from './sortablejs/sortable.component';

export const FeaturesRoutes: Routes = [{
  path: '',
  redirectTo: 'cropper',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'cropper',
    component: CropperComponent
  },{
    path: 'colorpicker',
    component: ColorPickerComponent
  },{
    path: 'dragula',
    component: DragulaDemoComponent
  },{
    path: 'sortable',
    component: SortableDemoComponent
  }]
}];
