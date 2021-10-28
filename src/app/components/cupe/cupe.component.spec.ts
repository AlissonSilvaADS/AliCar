import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupeComponent } from './cupe.component';

describe('CupeComponent', () => {
  let component: CupeComponent;
  let fixture: ComponentFixture<CupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
