import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWindowOpenerComponent } from './ng-window-opener.component';

describe('NgWindowOpenerComponent', () => {
  let component: NgWindowOpenerComponent;
  let fixture: ComponentFixture<NgWindowOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgWindowOpenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWindowOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
