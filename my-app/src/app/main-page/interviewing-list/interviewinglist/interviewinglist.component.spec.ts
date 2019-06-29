import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewinglistComponent } from './interviewinglist.component';

describe('InterviewinglistComponent', () => {
  let component: InterviewinglistComponent;
  let fixture: ComponentFixture<InterviewinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
