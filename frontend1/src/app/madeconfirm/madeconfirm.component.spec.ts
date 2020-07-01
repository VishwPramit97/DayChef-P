import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeconfirmComponent } from './madeconfirm.component';

describe('MadeconfirmComponent', () => {
  let component: MadeconfirmComponent;
  let fixture: ComponentFixture<MadeconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
