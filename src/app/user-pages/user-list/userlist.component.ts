import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ms-userlist',
    templateUrl:'./userlist-component.html',
    styleUrls: ['./userlist-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }
	
  users: Object[] = [{
      name: 'Haile',
      city: 'New York',
      country: 'USA',
      post:'Manager',
      cover:'assets/images/night.jpg',
      image:'assets/images/face1.jpg'
    },{
      name: 'Victor',
      city: 'New York',
      country: 'USA',
      post:'Developer',
      cover:'assets/images/night.jpg',
      image:'assets/images/face2.jpg'
    },{
      name: 'Jhon',
      city: 'New York',
      country: 'USA',
      post:'Student',
      cover:'assets/images/night.jpg',
      image:'assets/images/face3.jpg'
    },{
      name: 'Maria',
      city: 'New York',
      country: 'USA',
      post:'Student',
      cover:'assets/images/night.jpg',
      image:'assets/images/face4.jpg'
    },{
       name: 'Marry',
      city: 'New York',
      country: 'USA',
      post:'Student',
      cover:'assets/images/night.jpg',
      image:'assets/images/face5.jpg'
    },{
      name: 'Love',
      city: 'New York',
      country: 'USA',
      post:'Student',
      cover:'assets/images/night.jpg',
      image:'assets/images/face6.jpg'
    },{
      name: 'Harris',
      city: 'New York',
      country: 'USA',
      post:'Developer',
      cover:'assets/images/night.jpg',
      image:'assets/images/face7.jpg'
    },{
      name: 'Marcus',
      city: 'New York',
      country: 'USA',
      post:'Developer',
      cover:'assets/images/night.jpg',
      image:'assets/images/test2.jpg'
    },{
      name: 'Mills',
      city: 'New York',
      country: 'USA',
      post:'Developer',
      cover:'assets/images/night.jpg',
      image:'assets/images/test3.jpg'
    }
  ];
	
}



