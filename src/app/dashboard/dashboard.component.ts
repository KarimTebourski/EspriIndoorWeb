import { Component , OnInit , Input } from '@angular/core';
import { single, multi } from './charts.data';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../services/users.service';
import {User} from '../models/User.models';
import {Router} from '@angular/router';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  userName: string;
  email: string;
  _id: string;
  firstName: string;
  lastName: string;
  createdAt: string;

  isAdmin: boolean;
 // idau: string;
  selectedRow;
  clients: string[];
  sDkSetupIds;
  public user: String = '';
  public uid: String = '';
  public single: any[];
  public multi: any[];
  dataTable: any;
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
  };
  public autoScale = true;

  rows = [];

  // Shared chart options
  globalChartOptions: any = {
    responsive: true,
    legend: {
      display: false,
      position: 'bottom'
    }
  };

  pieChartData: number[] = [300, 500, 100];
  doughnutOptions: any = Object.assign({
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  }, this.globalChartOptions);
  doughnutChartColors: any[] = [{
    backgroundColor: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
  }];
  pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  pieChartType = 'pie';

  // Bar
  barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [{
    data: [6, 5, 8, 8, 5, 5, 4],
    label: 'Series A',
    borderWidth: 0
  }, {
    data: [5, 4, 4, 2, 6, 2, 5],
    label: 'Series B',
    borderWidth: 0
  }];
  barChartOptions: any = Object.assign({
    scaleShowVerticalLines: false,
    tooltips: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          defaultFontColor: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
           defaultFontColor: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: true
      }]
    }
  }, this.globalChartOptions);

  // Bubble Chart
  bubbleChartData: Array <any> = [{
    data: [{
      x: 6,
      y: 5,
      r: 15,
    }, {
      x: 5,
      y: 4,
      r: 10,
    }, {
      x: 8,
      y: 4,
      r: 6,
    }, {
      x: 8,
      y: 4,
      r: 6,
    }, {
      x: 5,
      y: 14,
      r: 14,
    }, {
      x: 5,
      y: 6,
      r: 8,
    }, {
      x: 4,
      y: 2,
      r: 10,
    }],
    label: 'Series A',
    borderWidth: 1
  }];
  bubbleChartType = 'bubble';

  // combo chart
  comboChartLabels: Array <any> = ['1', '2', '3', '4', '5', '6', '7'];
  chartColors: Array <any> = [{ // red
    backgroundColor: '#f44336',
    borderColor: '#f44336',
    pointBackgroundColor: '#f44336',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }, { // blue
    backgroundColor: '#7986cb',
    borderColor: '#3f51b5',
    pointBackgroundColor: '#3f51b5',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }, { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }];
  comboChartLegend = true;
  ComboChartData: Array <any> = [{
    data: [6, 5, 8, 8, 5, 5, 4],
    label: 'Series A',
    borderWidth: 1,
    type: 'line',
    fill: false
  }, {
    data: [5, 4, 4, 2, 6, 2, 5],
    label: 'Series B',
    borderWidth: 1,
    type: 'bar',
  }];
  ComboChartOptions: any = Object.assign({
    animation: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 9,
        }
      }]
    }
  }, this.globalChartOptions);

  // newsfeed
  messages: Object[] = [{
    from: 'Carolyn',
    message: 'Contrary to popular belief, Lorem Ipsum',
    photo: 'assets/images/face3.jpg',
    subject: 'Met, consectetur adipisic',
  }, {
    from: 'Chloe',
    message: 'It has roots in a piece of classica',
    photo: 'assets/images/face6.jpg',
    subject: 'Consectetur adipisic',
  }, {
    from: 'Diana',
    message: 'Professor at Hampden-Sydney College in Virginia',
    photo: 'assets/images/face4.jpg',
    subject: 'Onsectetur adipisic',
  }, ];

  displayedColumns: string[] = ['userName', 'firstName', 'lastName', 'email', 'heatMap', 'statistical'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataTable.filter = filterValue.trim().toLowerCase();
  }

  constructor(private userService: UserService, private router: Router) {
    this.fetch((data) => { this.rows = data; });
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }

  // project table
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/projects.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(
        (response) => {
          this.clients = response as string[];
          this.dataTable = new MatTableDataSource(this.clients);

          console.log(this.dataTable, this.clients);
        //  console.log(this.client);
        }
    )
    // console.log(event);
  }
  onRowClicked(row) {
    this.selectedRow = row;
    this.userName = this.selectedRow.userName;
    this.firstName = this.selectedRow.firstName;
    this.lastName = this.selectedRow.lastName;
    this.email = this.selectedRow.email;
    this.createdAt = this.selectedRow.createdAt;
    this.uid = this.selectedRow.idaUuid;
//    console.log(this.idau);
   // this.getSessions();
}

  highlightRow(row) {
    this.selectedRow = row;
  }

  getRecord(uid) {
    alert(uid);
    this.router.navigate(['/heatmap/' + uid]);
  }
  getRecord1(uid) {
    alert(uid);
    this.router.navigate(['/statistical/' + uid]);
  }
  ngOnInit(): void {
    this.getAllUsers();
   // this.getSessions();
  }
}
