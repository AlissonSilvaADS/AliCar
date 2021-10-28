import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicapeComponent } from './picape.component';

describe('PicapeComponent', () => {
  let component: PicapeComponent;
  let fixture: ComponentFixture<PicapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
