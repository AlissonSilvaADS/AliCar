import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedaComponent } from './seda.component';

describe('SedaComponent', () => {
  let component: SedaComponent;
  let fixture: ComponentFixture<SedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
