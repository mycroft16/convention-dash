import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'fanx-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private store: AppStore) { }

  doSignOut(event) {
    event.preventDefault();
    this.store.dispatch(factory => factory.auth.logout());
    this.router.navigate(['login']);
    // this.awaitSignout();
  }

  awaitSignout() {
    this.store.select(state => state.auth.authToken).subscribe(data => {
      if (data === null) {
        this.router.navigate(['login']);
      }
    });
  }

  ngOnInit() {
  }

}
