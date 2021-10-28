import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinivanComponent } from './minivan.component';

describe('MinivanComponent', () => {
  let component: MinivanComponent;
  let fixture: ComponentFixture<MinivanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinivanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinivanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
