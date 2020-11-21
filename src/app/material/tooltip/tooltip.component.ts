import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  position: TooltipPosition = 'below';
  message: string = 'Here is the tooltip';
  tooltips: string[] = [];
  disabled = false;
  showDelay = 0;
  hideDelay = 1000;
  showExtraClass = false;
}
