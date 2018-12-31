import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'fanx-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  doSignOut(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
