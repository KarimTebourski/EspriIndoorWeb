import { Component } from '@angular/core';

@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.scss']
})
export class MapGoogleComponent {

  lat = -34.397;
  lng = 150.644;

  constructor() {}
}
