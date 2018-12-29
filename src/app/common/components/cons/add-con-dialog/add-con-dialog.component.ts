import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { AppStore } from 'src/app/common/store/app.store';

@Component({
  selector: 'app-add-con-dialog',
  templateUrl: './add-con-dialog.component.html',
  styleUrls: ['./add-con-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddConDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddConDialogComponent>, private fb: FormBuilder, private store: AppStore) { }

  addConForm = this.fb.group({
    createdBy: ['1'],
    name: ['', [
      Validators.required
    ]],
    startDate: ['', [
      Validators.required
    ]],
    endDate: ['', [
      Validators.required
    ]],
    active: ['']
  });

  createCon() {
    // console.log(this.addConForm.value);
    this.store.dispatch(factory => factory.cons.createCon(this.addConForm.value));
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
