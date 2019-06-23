import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferinglistComponent } from './offeringlist.component';

describe('OfferinglistComponent', () => {
  let component: OfferinglistComponent;
  let fixture: ComponentFixture<OfferinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
