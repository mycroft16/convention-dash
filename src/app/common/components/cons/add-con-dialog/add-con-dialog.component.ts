import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AppStore } from 'src/app/common/store/app.store';

@Component({
  selector: 'app-add-con-dialog',
  templateUrl: './add-con-dialog.component.html',
  styleUrls: ['./add-con-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddConDialogComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: AppStore) { }

  addConForm = this.fb.group({
    name: ['', [
      Validators.required
    ]],
    startDate: ['', [
      Validators.required
    ]],
    endDate: ['', [
      Validators.required
    ]]
  });

  createCon() {
    console.log(this.addConForm);
    this.store.dispatch(factory => factory.cons.createCon(this.addConForm.value));
  }

  ngOnInit() {
  }

}
