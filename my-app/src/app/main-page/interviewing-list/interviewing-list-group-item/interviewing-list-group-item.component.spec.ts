import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewingListGroupItemComponent } from './interviewing-list-group-item.component';

describe('InterviewingListGroupItemComponent', () => {
  let component: InterviewingListGroupItemComponent;
  let fixture: ComponentFixture<InterviewingListGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewingListGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewingListGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
