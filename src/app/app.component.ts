import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'fanx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public hideElement$: Observable<boolean> = this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map((data: any) => (data.url === '/login' || data.url === '' || data.url === '/'))
    );

  constructor(private router: Router) { }

}
