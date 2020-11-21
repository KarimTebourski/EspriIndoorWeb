import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {SortablejsOptions} from "ngx-sortablejs";

@Component({
    selector: 'ms-sortable',
	templateUrl:'./sortable-component.html',
	styleUrls: ['./sortable-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SortableDemoComponent implements OnInit {

	list1: any[];
	list2: any[];
	numbers: any[];
	groupOptions: SortablejsOptions = {
		group: 'testGroup',
		handle: '.drag-handle',
		animation: 300
	};

	simpleOptions: SortablejsOptions = {
		animation: 300
	};

	constructor() {}

	ngOnInit() {
	

		this.list1 = [
		{
			image: 'assets/img/user-1.jpg',
			name: 'Alyson',
			subject: 'Cras sit',
			content: 'Tempus viverra turpis'
		},
		{
			image: 'assets/img/user-2.jpg',
			name: 'Yan',
		    subject: 'Cras sit',
			content: 'Tempus viverra turpis'
		},
		{
			image: 'assets/img/user-3.jpg',
			name: 'Melissa',
			subject: 'Cras sit',
			content: 'Tempus viverra turpis'
		},
		{
			image: 'assets/img/user-4.jpg',
			name: 'Bannie',
			subject: 'Cras sit',
			content: 'Tempus viverra turpis'
		},
		{
			image: 'assets/img/user-1.jpg',
			name: 'Janita',
			subject: 'Cras sit',
			content: 'Tempus viverra turpis'
		}];

		
	}
}


