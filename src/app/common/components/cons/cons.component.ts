import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef, MatDialog } from '@angular/material';
import { AddConDialogComponent } from './add-con-dialog/add-con-dialog.component';
import { DeleteConSheetComponent } from './delete-con-sheet/delete-con-sheet.component';
import { AddGuestDialogComponent } from '../guests/add-guest-dialog/add-guest-dialog.component';
import { ICon } from '../../interfaces/cons.interface';
import { Observable } from 'rxjs';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-cons',
  templateUrl: './cons.component.html',
  styleUrls: ['./cons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsComponent implements OnInit {

  public cons: Observable<ICon[]> = null;
  public displayedColumns: string[] = [ 'index', 'event', 'start', 'end', 'days', 'status', 'actions' ];

  constructor(public bottomSheet: MatBottomSheet, public dialog: MatDialog, private store: AppStore) {
    this.cons = this.store.select(state => state.cons.list);
  }

  public openAddConDialog(): void {
    this.dialog.open(AddConDialogComponent, {
      data: { type: 'add' },
      height: '400px',
      width: '400px'
    });
  }

  public editCon(id: number): void {
    this.dialog.open(AddConDialogComponent, {
      data: { type: 'edit', id: id },
      height: '400px',
      width: '400px'
    });
  }

  addGuestToCon(con: ICon): void {
    this.bottomSheet.open(AddGuestTypeComponent, { data: { con: con } } );
  }

  deleteCon(con: ICon): void {
    this.bottomSheet.open(DeleteConSheetComponent, { data: { con: con } } );
  }

  ngOnInit() {
    this.store.dispatch(factory => factory.cons.getCons());
  }

}


@Component({
  selector: 'app-add-guest-type',
  template: `Add what type of guest to <b>{{ con.name }}</b>?

  <mat-nav-list>
    <a mat-list-item (click)="addNewGuest($event)">
      <span mat-line>New Guest</span>
    </a>
  
    <a mat-list-item (click)="addExistingGuest($event)">
      <span mat-line>Existing Guest</span>
    </a>
  </mat-nav-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGuestTypeComponent implements OnInit {

  con: ICon;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, 
    private bottomSheetRef: MatBottomSheetRef<AddGuestTypeComponent>, 
    private dialog: MatDialog
  ) {
    this.con = data.con;
  }

  addNewGuest(event: MouseEvent): void {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
    this.dialog.open(AddGuestDialogComponent, {
      data: { type: 'add' },
      height: '560px',
      width: '650px'
    });
  }

  addExistingGuest(event: MouseEvent): void {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {

  }
}