import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddConDialogComponent } from './add-con-dialog/add-con-dialog.component';

@Component({
  selector: 'app-cons',
  templateUrl: './cons.component.html',
  styleUrls: ['./cons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openAddConDialog() {
    this.dialog.open(AddConDialogComponent, {
      width: '500px'
    });
  }

  ngOnInit() {
  }

}
