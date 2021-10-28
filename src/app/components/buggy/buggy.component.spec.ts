import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuggyComponent } from './buggy.component';

describe('BuggyComponent', () => {
  let component: BuggyComponent;
  let fixture: ComponentFixture<BuggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuggyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
