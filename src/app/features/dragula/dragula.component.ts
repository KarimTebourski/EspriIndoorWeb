import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ms-dragula',
	templateUrl:'./dragula-component.html',
  	styleUrls: ['./dragula-component.scss']
})
export class DragulaDemoComponent implements OnInit {
	
	constructor() {}

   ngOnInit() { }

	group1: Object[] = [{
		name: 'Andrew Pearson',
	},{
		name: 'John S. Guinn',
      
	},{
		name: 'Jill D. Loring',
        
	},{
		name: 'Reggie J. Pough',
        
	},{
		name: 'Eric C. Taylor',
       
	}];

	group2: any[] = [{
		name: 'Apple',
        
	},{
		name: 'Mango',
        
	},{
		name: 'Apricot',
        
	},{
		name: 'Banana',
        
	},{
		name: 'Bilberry',
    
	}];

}



