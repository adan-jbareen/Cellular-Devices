import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrudectsComponent } from './prudects.component';

describe('PrudectsComponent', () => {
  let component: PrudectsComponent;
  let fixture: ComponentFixture<PrudectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrudectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrudectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
