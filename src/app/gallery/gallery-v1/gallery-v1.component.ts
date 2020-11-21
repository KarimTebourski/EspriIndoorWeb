import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
   'selector': 'ms-gallery-v1',
   templateUrl:'./gallery-v1-component.html',
   styleUrls: ['./gallery-v1-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class GalleryOneComponent implements OnInit {

   images: any[] = [];
   num = 1;

   constructor() {
      for (this.num; this.num <= 9; this.num += 1) {
         this.images.push(this.num);
      }
   }
   ngOnInit() {}
}