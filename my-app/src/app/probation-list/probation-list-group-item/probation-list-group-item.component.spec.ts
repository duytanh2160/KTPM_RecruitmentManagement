import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationListGroupItemComponent } from './probation-list-group-item.component';

describe('ProbationListGroupItemComponent', () => {
  let component: ProbationListGroupItemComponent;
  let fixture: ComponentFixture<ProbationListGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationListGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationListGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
