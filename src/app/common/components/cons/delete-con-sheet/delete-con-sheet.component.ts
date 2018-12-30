import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ICon } from '../../../interfaces/cons.interface';

@Component({
  selector: 'app-delete-con-sheet',
  templateUrl: './delete-con-sheet.component.html',
  styleUrls: ['./delete-con-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteConSheetComponent implements OnInit {

  con: ICon;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.con = data.con;
    console.log('data: ', this.con);
  }

  ngOnInit() {
  }

}
