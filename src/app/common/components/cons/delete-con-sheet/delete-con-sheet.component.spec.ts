import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConSheetComponent } from './delete-con-sheet.component';

describe('DeleteConSheetComponent', () => {
  let component: DeleteConSheetComponent;
  let fixture: ComponentFixture<DeleteConSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
