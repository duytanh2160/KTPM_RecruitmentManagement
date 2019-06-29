import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationListSearchComponent } from './probation-list-search.component';

describe('ProbationListSearchComponent', () => {
  let component: ProbationListSearchComponent;
  let fixture: ComponentFixture<ProbationListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
