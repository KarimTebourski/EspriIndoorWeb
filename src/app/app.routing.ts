import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import {StatisticalComponent} from './statistical/statistical.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'authentication/login',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
  }, { path: 'statistical/:id' , component: StatisticalComponent
  }
  , { path: 'heatmap/:id' , component: HeatmapComponent
  }, {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  }, {
    path: 'material',
    loadChildren: () => import('./material/material.module').then(m => m.MaterialComponentsModule)
  }, {
    path: 'icons',
    loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  }, {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormModule)
  }, {
    path: 'tables',
    loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  }, {
    path: 'charts',
    loadChildren: () => import('./chartlib/chartlib.module').then(m => m.ChartlibModule)
  }, {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapModule)
  }, {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsDemoModule)
  }, {
    path: 'pages',
    loadChildren: () => import('./custom-pages/pages.module').then(m => m.PagesDemoModule)
  }, {
    path: 'user-pages',
    loadChildren: () => import('./user-pages/users.module').then(m => m.UsersModule)
  }, {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryDemoModule)
  }, {
    path: 'ecommerce',
    loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceDemoModule)
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
  }, {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
