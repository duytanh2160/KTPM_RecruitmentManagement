import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewingListSearchComponent } from './interviewing-list-search.component';

describe('InterviewingListSearchComponent', () => {
  let component: InterviewingListSearchComponent;
  let fixture: ComponentFixture<InterviewingListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewingListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewingListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
