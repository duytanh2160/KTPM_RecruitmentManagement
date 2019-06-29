import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListSearchComponent } from './candidate-list-search.component';

describe('CandidateListSearchComponent', () => {
  let component: CandidateListSearchComponent;
  let fixture: ComponentFixture<CandidateListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
