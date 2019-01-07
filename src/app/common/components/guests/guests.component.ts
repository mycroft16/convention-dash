import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { AddGuestDialogComponent } from './add-guest-dialog/add-guest-dialog.component';
import { Observable } from 'rxjs';
import { IGuest } from '../../interfaces/guests.interface';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestsComponent implements OnInit {

  public guestList: Observable<IGuest[]> = null;
  public displayedColumns: string[] = [ 'index', 'name', 'category', 'status', 'conCount', 'photoOp' ];

  constructor(public bottomSheet: MatBottomSheet, public dialog: MatDialog, private store: AppStore) {
    this.guestList = this.store.select(store => store.guests.guestList);
  }

  public openAddGuestDialog(): void {
    this.dialog.open(AddGuestDialogComponent, {
      data: { type: 'add' },
      height: '560px',
      width: '650px'
    });
  }

  public editGuest(id: number): void {
    this.dialog.open(AddGuestDialogComponent, {
      data: { type: 'edit', id: id },
      height: '560px',
      width: '650px'
    });
  }

  public deleteGuest(guest: IGuest): void {
    // this.bottomSheet.open(DeleteGuestSheetComponent, { data: { guest: guest } } );
  }

  ngOnInit() {

  }

}
