import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fanx-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
