import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { AppStore } from '../../store/app.store';
import { ICon } from '../../interfaces/cons.interface';

@Component({
  selector: 'fanx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public title: BehaviorSubject<Object> = new BehaviorSubject({ icon: '', text: '' });
  public conList: Observable<ICon[]>;
  // public cons = new Set();

  constructor(private store: AppStore, private fb: FormBuilder) {
    this.setHeaderTitle(window.location.pathname);
    this.getCons();
  }

  selectConForm = this.fb.group({
    selectCon: ['']
  })

  private getCons() {
    this.conList = this.store.select(state => state.cons.list);
    // this.cons.add(this.conList);
    // console.log(this.cons);
  }

  private selectCon(event) {
    console.log('change to: ', event.value);
    this.store.dispatch(factory => factory.cons.selectCon(event.value));
  }

  private setHeaderTitle(path) {
    switch(path) {
      case '/dashboard': {
        this.title.next({ icon: 'far fa-home fa-fw', text: 'Dashboard'});
        break;
      }

      case '/cons': {
        this.title.next({ icon: 'far fa-calendar-week fa-fw', text: 'Conventions' });
        break;
      }

      case '/guests': {
        this.title.next({ icon: 'far fa-user-secret fa-fw', text: 'Guests' });
        break;
      }

      case '/vendors': {
        this.title.next({ icon: 'far fa-comments-dollar fa-fw', text: 'Vendors' });
        break;
      }

      case '/settings': {
        this.title.next({ icon: 'far fa-cogs fa-fw', text: 'Settings' });
        break;
      }

    }
  }

  ngOnInit() {
  }

}
