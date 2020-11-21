import { Routes } from '@angular/router';

import { GalleryOneComponent } from './gallery-v1/gallery-v1.component';
import { GalleryTwoComponent } from './gallery-v2/gallery-v2.component';
import { GalleryThreeComponent } from './gallery-v3/gallery-v3.component';

export const GalleryRoutes: Routes = [{
  path: '',
  redirectTo: 'gallery-v1',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'gallery-v1',
    component: GalleryOneComponent
  }, {
    path: 'gallery-v2',
    component: GalleryTwoComponent
  }, {
    path: 'gallery-v3',
    component: GalleryThreeComponent
  }]
}];
