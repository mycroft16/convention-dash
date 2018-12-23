import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsComponent } from './cons.component';

describe('ConsComponent', () => {
  let component: ConsComponent;
  let fixture: ComponentFixture<ConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
