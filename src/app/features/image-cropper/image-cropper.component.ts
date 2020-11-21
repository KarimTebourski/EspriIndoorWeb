import { Component, AfterViewInit, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

declare var $: any;

@Component({
    selector: 'ms-image-cropper',
    templateUrl:'./image-cropper-component.html',
    styleUrls: ['./image-cropper-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CropperComponent implements AfterViewInit, OnInit{

    constructor() {}

    ngOnInit() { }

ngAfterViewInit(){    
    $('.container > img').cropper({
      aspectRatio: 16 / 9,
      crop: function(data) {}
    });
}
	
}



