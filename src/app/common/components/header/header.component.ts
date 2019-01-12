import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'fanx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public title: BehaviorSubject<Object> = new BehaviorSubject({ icon: '', text: '' });

  constructor(private store: AppStore) {
    this.setHeaderTitle(window.location.pathname);
    // this.getCons();
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
