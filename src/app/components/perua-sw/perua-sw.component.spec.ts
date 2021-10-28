import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruaSwComponent } from './perua-sw.component';

describe('PeruaSwComponent', () => {
  let component: PeruaSwComponent;
  let fixture: ComponentFixture<PeruaSwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruaSwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruaSwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
