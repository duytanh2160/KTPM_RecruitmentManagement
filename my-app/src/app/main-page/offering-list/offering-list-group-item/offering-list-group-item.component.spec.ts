import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingListGroupItemComponent } from './offering-list-group-item.component';

describe('OfferingListGroupItemComponent', () => {
  let component: OfferingListGroupItemComponent;
  let fixture: ComponentFixture<OfferingListGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingListGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingListGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
