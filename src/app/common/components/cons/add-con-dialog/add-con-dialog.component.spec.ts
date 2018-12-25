import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConDialogComponent } from './add-con-dialog.component';

describe('AddConDialogComponent', () => {
  let component: AddConDialogComponent;
  let fixture: ComponentFixture<AddConDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
