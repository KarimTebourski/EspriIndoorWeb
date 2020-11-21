import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  lastCloseResult: string;
  config: MatDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };

  constructor(public dialog: MatDialog) {}

  open() {
    let dialogRef = this.dialog.open(JazzDialogComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
    });
  }
}

@Component({
  selector: 'app-jazz-dialog',
  template: `
  <h5 class="mt-0">Maecenas faucibus mollis interdum.</h5>
  <mat-form-field>
    <input matInput placeholder="How much?" #howMuch type="number" style="width: 100%;">
  </mat-form-field>
  <p> {{ jazzMessage }} </p>
  <button mat-button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>`
})
export class JazzDialogComponent {
  jazzMessage = 'Jazzy jazz jazz';
  constructor(public dialogRef: MatDialogRef <JazzDialogComponent> ) {}
}
