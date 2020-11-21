import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import {ActivatedRoute} from '@angular/router';
import {Chart} from 'chart.js';
import 'rxjs/add/operator/map';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {
    sDkSetupIds;
    ts;
    fl;
    time;
    chart = [];
    flr00: number;
   public flr1: number ;
   public flr0: number ;
    floor: any;
    fooor: any;
    fr0: number = 0;
    fr1: number = 0;
    public uid: String = '';
    barChartOptions: ChartOptions = {
        responsive: true,
    };
    barChartLabels: Label[] = ['Floor 0'];
    barChartType: ChartType = 'bar';
    barChartLegend = true;
    barChartPlugins = [];
    // public barChartData: Object [];
    barChartData: ChartDataSets[];

    barChartOptions1: ChartOptions = {
        responsive: true,
    };
    barChartLabels1: Label[] = ['Floor 1'];
    barChartType1: ChartType = 'bar';
    barChartLegend1 = true;
    barChartPlugins1 = [];
    // public barChartData: Object [];
    barChartData1: ChartDataSets[];
k;
    PieChart: Chart;
   // public barChartData: Object [];
  //  barChartData: ChartDataSets[] ;
    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.uid = this.route.snapshot.params['id'];
        this.getFloor0()
        this.getFloor1()
     //  this.flr0 = this.getSessions()
       // this.getSessions()
       // console.log(this.flr1+'hedhaaaa fill OnInit')
     //  this.k = this.getFloor0()
      // console.log(this.k+"hedhaaa eli fil ng Oninit")
    }

    public getFloor0() {
        this.userService.getSetupIds(this.uid).subscribe(
            (resp) => {
                this.sDkSetupIds = resp;
                // this.dataTable = new MatTableDataSource(this.clients);
                this.sDkSetupIds.forEach(element => this.userService.getCordinatss(element).subscribe(
                    (resp1 => {
                        this.floor = resp1;
                        this.floor.forEach(element3 => {
                            if (element3 != null) {
                                this.ts = element3.ts;
                                this.time = element3.ts;
                                this.fl = element3.floorNumber;
                                if (this.fl === 0 ) {
                                   this.fr0 ++;
                                    this.barChartOptions = {
                                        responsive: true,
                                    };
                                    this.barChartLabels = ['Floor 0'];
                                    this.barChartType = 'bar';
                                    this.barChartLegend = true;
                                    this.barChartPlugins = [];
                                    this.barChartData = [
                                        {data: [this.fr0], label: 'Session Opened'}
                                    ];
                                   console.log(this.fr0 + 'lde5ellllllllllllll')
                                }
                                this.fr1++;
                            }
                        })
                    })
                ));
            }
        )
    }

    public getFloor1() {
        this.userService.getSetupIds(this.uid).subscribe(
            (resp) => {
                this.sDkSetupIds = resp;
                // this.dataTable = new MatTableDataSource(this.clients);
                this.sDkSetupIds.forEach(element => this.userService.getCordinatss(element).subscribe(
                    (resp1 => {
                        this.floor = resp1;
                        this.floor.forEach(element3 => {
                            if (element3 != null) {
                                this.ts = element3.ts;
                                this.time = element3.ts;
                                this.fl = element3.floorNumber;
                                if (this.fl === 1 ) {
                                    this.fr1 ++;
                                    this.barChartOptions1 = {
                                        responsive: true,
                                    };
                                    this.barChartLabels1 = ['Floor 1'];
                                    this.barChartType1 = 'bar';
                                    this.barChartLegend1 = true;
                                    this.barChartPlugins1 = [];
                                    this.barChartData1 = [
                                        {data: [this.fr1], label: 'Session Opened'}
                                    ];
                                }
                            }
                        })
                    })
                ));
            }
        )
    }
/*
   public getSessions() {
       var fr0=0;
       var fr1=0;
        this.userService.getSetupIds(this.uid).subscribe(
            (resp) => {
                this.sDkSetupIds = resp;
                // this.dataTable = new MatTableDataSource(this.clients);
                this.sDkSetupIds.forEach(element => this.userService.getCordinatss(element).subscribe(
                    (resp1 => {
                        //  this.floor = resp1.floorNumber
                        // console.log(resp1);
                        this.floor = resp1;
                        
                        this.floor.forEach(element3 => {
                            if (element3 != null) {
                                this.ts = element3.ts;
                                this.time = element3.ts;
                                this.fl = element3.floorNumber;
                                if (this.fl === 0) {
                                   fr0 ++;
                                   this.PieChart = new Chart('pieChart', {
                                    type: 'pie',
                                  data: {
                                   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                                   datasets: [{
                                       label: '# of Votes',
                                       data: [fr0,7 , 3, 5, 2, 10],
                                       backgroundColor: [
                                           'rgba(255, 99, 132, 0.2)',
                                           'rgba(54, 162, 235, 0.2)',
                                           'rgba(255, 206, 86, 0.2)',
                                           'rgba(75, 192, 192, 0.2)',
                                           'rgba(153, 102, 255, 0.2)',
                                           'rgba(255, 159, 64, 0.2)'
                                       ] }]
                                    }, 
                                    options: {
                                     title:{
                                         text:"Bar Chart",
                                         display:true
                                     },
                                     scales: {
                                         yAxes: [{
                                             ticks: {
                                                 beginAtZero:true
                                             }
                                         }]
                                     }
                                    }
                                    });
                                }
                                    fr1++;

                                    this.PieChart = new Chart('pieChart', {
                                        type: 'pie',
                                      data: {
                                       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                                       datasets: [{
                                           label: '# of Votes',
                                           data: [fr0,fr1 , 3, 5, 2, 10],
                                           backgroundColor: [
                                               'rgba(255, 99, 132, 0.2)',
                                               'rgba(54, 162, 235, 0.2)',
                                               'rgba(255, 206, 86, 0.2)',
                                               'rgba(75, 192, 192, 0.2)',
                                               'rgba(153, 102, 255, 0.2)',
                                               'rgba(255, 159, 64, 0.2)'
                                           ]
                                        }]
                                    }, 
                                    options: {
                                     title:{
                                         text:"Bar Chart",
                                         display:true
                                     },
                                     scales: {
                                         yAxes: [{
                                             ticks: {
                                                 beginAtZero:true
                                             }
                                         }]
                                     }
                                    }
                                    })
                            }
                        })
                    })
                ));

            }
        )

    }
    */
}
