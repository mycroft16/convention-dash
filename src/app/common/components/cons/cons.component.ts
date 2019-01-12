import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { AddConDialogComponent } from './add-con-dialog/add-con-dialog.component';
import { DeleteConSheetComponent } from './delete-con-sheet/delete-con-sheet.component';
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

  deleteCon(con: ICon): void {
    this.bottomSheet.open(DeleteConSheetComponent, { data: { con: con } } );
  }

  ngOnInit() {
    this.store.dispatch(factory => factory.cons.getCons());
  }

}
