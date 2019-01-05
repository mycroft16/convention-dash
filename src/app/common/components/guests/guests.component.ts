import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
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

  openAddGuestDialog() {
    
  }

  ngOnInit() {

  }

}
