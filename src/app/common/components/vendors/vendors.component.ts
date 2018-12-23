import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
