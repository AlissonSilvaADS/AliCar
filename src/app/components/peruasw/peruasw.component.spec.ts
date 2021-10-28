import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruaswComponent } from './peruasw.component';

describe('PeruaswComponent', () => {
  let component: PeruaswComponent;
  let fixture: ComponentFixture<PeruaswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruaswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruaswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
