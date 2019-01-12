import { ChangeDetectionStrategy, Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

import { AppStore } from '../../../store/app.store';
import { ICon } from '../../../interfaces/cons.interface';

@Component({
  selector: 'app-add-guest-dialog',
  templateUrl: './add-guest-dialog.component.html',
  styleUrls: ['./add-guest-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGuestDialogComponent implements OnInit {

  public saveButtonText: string = 'Create';
  public type: string = 'add';
  public faceShotLabelText: string = 'Select Faceshot';
  public billBoardLabelText: string = 'Select Billboard';
  public conList: Observable<ICon[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddGuestDialogComponent>,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private store: AppStore
  ) {
    this.getCons();
    if (data.type === 'edit') {
      console.log('edit form stuff here');
    }
  }

  private getCons() {
    this.conList = this.store.select(state => state.cons.list);
    // this.cons.add(this.conList);
    // console.log(this.cons);
  }

  addGuestForm = this.fb.group({
    id: [''],
    faceShotValue: [''],
    billBoardValue: [''],
    firstName: ['', [
      Validators.required
    ]],
    middleName: [''],
    lastName: ['', [
      Validators.required
    ]],
    category: ['', [
      Validators.required
    ]],
    bio: ['', [
      Validators.required
    ]],
    faceShot: [''],
    billBoard: [''],
    // sizzleReel: [''],
    doesPhotoOp: [''],
    pricePhotoOp: [{ value: '', disabled: true }, [
      Validators.required
    ]],
    doesAutograph: [''],
    priceAutograph: [{ value: '', disabled: true }, [
      Validators.required
    ]]
    // doesSelfie: [''],
    // priceSelfie: [''],
  });

  onFileChange(event, field) {
    let reader = new FileReader();

    const fileName = event.target.value.split('\\').pop();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        console.log(reader);
        if (field === 'faceShot') {
          this.faceShotLabelText = fileName;
          this.addGuestForm.patchValue({
            faceShotValue: reader.result
          });
        } else if (field === 'billBoard') {
          this.billBoardLabelText = fileName;
          this.addGuestForm.patchValue({
            billBoardValue: reader.result
          });
        }

        this.cd.markForCheck();
      };
    }
  }

  togglePriceField(event, field) {
    (event.checked === true) ? this.addGuestForm.get(field).enable() : this.addGuestForm.get(field).disable();
  }

  saveGuest() {
    console.log(this.addGuestForm.value);
    if (this.type === 'add') {
      
    } else if (this.type === 'edit') {

    }
    // this.dialogRef.close();
  }

  ngOnInit() {
  }

}
