import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { ICon } from '../../../interfaces/cons.interface';
import { AppStore } from '../../../store/app.store';

@Component({
  selector: 'app-delete-con-sheet',
  templateUrl: './delete-con-sheet.component.html',
  styleUrls: ['./delete-con-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteConSheetComponent implements OnInit {

  public con: ICon;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, 
    private bottomSheetRef: MatBottomSheetRef<DeleteConSheetComponent>, 
    private store: AppStore
  ) {
    this.con = data.con;
  }

  deleteCon(event: MouseEvent): void {
    this.store.dispatch(factory => factory.cons.deleteCon(this.con.id));
    this.bottomSheetRef.dismiss();
  }

  closeSheet(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
