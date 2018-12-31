import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as moment from 'moment';

import { AppStore } from 'src/app/common/store/app.store';

@Component({
  selector: 'app-add-con-dialog',
  templateUrl: './add-con-dialog.component.html',
  styleUrls: ['./add-con-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddConDialogComponent implements OnInit {

  public saveButtonText = 'Create';
  public type: string = 'add';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddConDialogComponent>, 
    private fb: FormBuilder, 
    private store: AppStore
  ) {
    if (data.type === 'edit') {
      this.type = 'edit';
      const conList = this.store.snapshot(store => store.cons.list);
      for (let i = 0; i < conList.length; i++) {
        if (conList[i].id === data.id) {
          const start = moment(conList[i].startDate).format();
          const end = moment(conList[i].endDate).format();
          this.addConForm.setValue({
            id: conList[i].id,
            createdBy: '1',
            name: conList[i].name,
            startDate: start,
            endDate: end,
            active: (conList[i].status === "1") ? true : false
          });
          this.saveButtonText = 'Update';
        }
      }
    }
  }

  addConForm = this.fb.group({
    id: [''],
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

  saveCon() {
    // console.log(this.addConForm.value);
    if (this.type === 'add') {
      this.store.dispatch(factory => factory.cons.createCon(this.addConForm.value));
    } else if (this.type === 'edit') {
      this.store.dispatch(factory => factory.cons.updateCon(this.addConForm.value));
    }
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
