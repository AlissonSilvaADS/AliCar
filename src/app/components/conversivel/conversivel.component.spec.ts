import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversivelComponent } from './conversivel.component';

describe('ConversivelComponent', () => {
  let component: ConversivelComponent;
  let fixture: ComponentFixture<ConversivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
