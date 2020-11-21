import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ColorPickerService} from 'ngx-color-picker';

@Component({
    selector: 'ms-color-picker',
    templateUrl:'./color-picker-component.html',
    styleUrls: ['./color-picker-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ColorPickerComponent {
    public color: string = "#e83f6f";
    public color2: string = "#ffbf00";
    public color3: string = "#32936f";
    public color4: string = "#2274a5";
    public color5: string = "#5bc0de";
    public color6: string = "#ff5b77";
    public color7: string = "#613d7c";
    public color8: string = "#e83f63";
    constructor(private cpService: ColorPickerService) {
    }
	
}



