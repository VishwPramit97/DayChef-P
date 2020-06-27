import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookconfirmComponent } from './cookconfirm.component';

describe('CookconfirmComponent', () => {
  let component: CookconfirmComponent;
  let fixture: ComponentFixture<CookconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
