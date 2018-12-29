import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddConDialogComponent } from './add-con-dialog/add-con-dialog.component';
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

  constructor(public dialog: MatDialog, private store: AppStore) {
    this.cons = this.store.select(state => state.cons.list);
  }

  openAddConDialog() {
    this.dialog.open(AddConDialogComponent, {
      height: '400px',
      width: '400px'
    });
  }

  editCon(id: number): void {
    console.log('edit con: ', id);
  }

  deleteCon(id: number): void {
    console.log('delete con: ', id);
  }

  ngOnInit() {
    this.store.dispatch(factory => factory.cons.getCons());
  }

}
