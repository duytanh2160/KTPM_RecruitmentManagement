import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonSectionComponent } from './add-button-section.component';

describe('ImportAddSectionComponent', () => {
  let component: AddButtonSectionComponent;
  let fixture: ComponentFixture<AddButtonSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddButtonSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
