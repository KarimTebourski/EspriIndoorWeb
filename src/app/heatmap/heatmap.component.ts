import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/users.service';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})

export class HeatmapComponent implements OnInit {
    sDkSetupIds;
    sdk;
    public uid: String = '';

    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 37.75;
    lng = -122.41;

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.uid = this.route.snapshot.params['id'];
       // this.getSessions();
        this.getSdk();

    }


    getSessions() {
        this.userService.getSetupIds(this.uid).subscribe(
            (resp) => {
                this.sDkSetupIds = resp;
                // this.dataTable = new MatTableDataSource(this.clients);
                this.sDkSetupIds.forEach(element => this.userService.getCordinats(element).subscribe(
                    (resp1) => {
                        console.log(resp1)
                    }
                ));
                console.log(this.sDkSetupIds);
                //  console.log(this.client);
            }
        )

    }

    getSdk() {
        let ss;
        let s2;
        const s1 = 'http://localhost:3000/getlatlen/'
        this.userService.getSetupIds(this.uid).subscribe(
            (resp) => {
                ss = resp;
                ss.forEach(element1 => s2 = element1)
                {
                    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
                    this.map = new mapboxgl.Map({
                        container: 'map',
                        style: this.style,
                        zoom: 13,
                        center: [this.lng, this.lat]
                    });
                    // Add map controls
                    this.map.addControl(new mapboxgl.NavigationControl());

                    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoidGVib3Vyc2tpIiwiYSI6ImNrYmI4Y2Q4dTAyMG4yeW8xNmdqcmt0Zm8ifQ.wKAex7v0gmimObf-7a-P5g';
                    var map = new mapboxgl.Map({
                        container: 'map',
                        style: 'mapbox://styles/mapbox/dark-v10',
                        center: [20, 50],
                        zoom: 2
                    });

                    map.on('load', function () {
// Add a geojson point source.
                        // Heatmap layers also work with a vector tile source.
                        map.addSource('earthquakes', {
                            'type': 'geojson',
                            'data':
                                s1 + s2
                        });
                        map.addLayer(
                            {
                                'id': 'earthquakes-heat',
                                'type': 'heatmap',
                                'source': 'earthquakes',
                                'maxzoom': 9,
                                'paint': {
// Increase the heatmap weight based on frequency and property magnitude
                                    'heatmap-weight': [
                                        'interpolate',
                                        ['linear'],
                                        ['get', 'mag'],
                                        0,
                                        0,
                                        6,
                                        1
                                    ],
// Increase the heatmap color weight weight by zoom level
// heatmap-intensity is a multiplier on top of heatmap-weight
                                    'heatmap-intensity': [
                                        'interpolate',
                                        ['linear'],
                                        ['zoom'],
                                        0,
                                        1,
                                        9,
                                        3
                                    ],
// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
// Begin color ramp at 0-stop with a 0-transparancy color
// to create a blur-like effect.
                                    'heatmap-color': [
                                        'interpolate',
                                        ['linear'],
                                        ['heatmap-density'],
                                        0,
                                        'rgba(33,102,172,0)',
                                        0.2,
                                        'rgb(103,169,207)',
                                        0.4,
                                        'rgb(209,229,240)',
                                        0.6,
                                        'rgb(253,219,199)',
                                        0.8,
                                        'rgb(239,138,98)',
                                        1,
                                        'rgb(178,24,43)'
                                    ],
// Adjust the heatmap radius by zoom level
                                    'heatmap-radius': [
                                        'interpolate',
                                        ['linear'],
                                        ['zoom'],
                                        0,
                                        2,
                                        9,
                                        20
                                    ],
// Transition from heatmap to circle layer by zoom level
                                    'heatmap-opacity': [
                                        'interpolate',
                                        ['linear'],
                                        ['zoom'],
                                        7,
                                        1,
                                        9,
                                        0
                                    ]
                                }
                            },
                            'waterway-label'
                        );

                        map.addLayer(
                            {
                                'id': 'earthquakes-point',
                                'type': 'circle',
                                'source': 'earthquakes',
                                'minzoom': 7,
                                'paint': {
// Size circle radius by earthquake magnitude and zoom level
                                    'circle-radius': [
                                        'interpolate',
                                        ['linear'],
                                        ['zoom'],
                                        7,
                                        ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
                                        16,
                                        ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
                                    ],
// Color circle by earthquake magnitude
                                    'circle-color': [
                                        'interpolate',
                                        ['linear'],
                                        ['get', 'mag'],
                                        1,
                                        'rgba(33,102,172,0)',
                                        2,
                                        'rgb(103,169,207)',
                                        3,
                                        'rgb(209,229,240)',
                                        4,
                                        'rgb(253,219,199)',
                                        5,
                                        'rgb(239,138,98)',
                                        6,
                                        'rgb(178,24,43)'
                                    ],
                                    'circle-stroke-color': 'white',
                                    'circle-stroke-width': 1,
// Transition from heatmap to circle layer by zoom level
                                    'circle-opacity': [
                                        'interpolate',
                                        ['linear'],
                                        ['zoom'],
                                        7,
                                        0,
                                        8,
                                        1
                                    ]
                                },
                            },
                            'waterway-label'
                        );
                        map.addSource('myImageSource', {
                            'type': 'image',
                            'url' : 'http://localhost:3000/events/uploads/blocke.png',
                            'coordinates': [
                                [ 10.19013818 , 36.90007427],
                                [ 10.19047111 , 36.89982634],
                                [ 10.19009024 , 36.89947886],
                                [ 10.18975765 , 36.89971909]
                            ]
                        });

                        map.addLayer({
                            'id': 'overlay',
                            'source': 'myImageSource',
                            'type': 'raster',
                            'paint': {
                                'raster-opacity': 0.45
                            }
                        });
                    });
                }
            })
    }
}
