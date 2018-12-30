import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fanx-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkComponent implements OnInit {

  @Input() public route: string;
  @Input() public icon: string;
  @Input() public text: string;

  constructor() { }

  ngOnInit() {
  }

}
