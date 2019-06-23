import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingListSearchComponent } from './offering-list-search.component';

describe('OfferingListSearchComponent', () => {
  let component: OfferingListSearchComponent;
  let fixture: ComponentFixture<OfferingListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
