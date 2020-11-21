import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';

import { MapRoutes } from './maps.routing';
import { MapGoogleComponent } from './map-google/map-google.component';
import { MapLeafletComponent } from './map-leaflet/map-leaflet.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
    FormsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
  ],
  declarations: [
    MapGoogleComponent,
    MapLeafletComponent
  ]
})

export class MapModule {}
