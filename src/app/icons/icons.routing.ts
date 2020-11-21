import { Routes } from '@angular/router';

import { FontAwesomeComponent}  from './font-awesome/font-awesome.component';
import { MaterialIconComponent}  from './material-icons/icons.component';

export const IconsRoutes: Routes = [{
  path: '',
  redirectTo: 'font-awesome',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'font-awesome',
    component: FontAwesomeComponent
  }, {
    path: 'material-icons',
    component: MaterialIconComponent
  }]
}];
