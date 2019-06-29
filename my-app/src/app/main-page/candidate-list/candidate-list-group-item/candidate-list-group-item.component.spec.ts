import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListGroupItemComponent } from './candidate-list-group-item.component';

describe('CandidateListGroupItemComponent', () => {
  let component: CandidateListGroupItemComponent;
  let fixture: ComponentFixture<CandidateListGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateListGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateListGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
