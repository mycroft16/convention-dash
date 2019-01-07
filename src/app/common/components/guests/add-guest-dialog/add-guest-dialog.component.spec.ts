import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuestDialogComponent } from './add-guest-dialog.component';

describe('AddGuestDialogComponent', () => {
  let component: AddGuestDialogComponent;
  let fixture: ComponentFixture<AddGuestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
