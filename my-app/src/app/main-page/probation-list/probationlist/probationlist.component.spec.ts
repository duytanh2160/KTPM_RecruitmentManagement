import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationlistComponent } from './probationlist.component';

describe('ProbationlistComponent', () => {
  let component: ProbationlistComponent;
  let fixture: ComponentFixture<ProbationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
