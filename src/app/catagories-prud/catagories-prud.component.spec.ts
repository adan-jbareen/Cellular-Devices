import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriesPrudComponent } from './catagories-prud.component';

describe('CatagoriesPrudComponent', () => {
  let component: CatagoriesPrudComponent;
  let fixture: ComponentFixture<CatagoriesPrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoriesPrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoriesPrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
