import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSchoolComponent } from './education-school.component';

describe('EducationSchoolComponent', () => {
  let component: EducationSchoolComponent;
  let fixture: ComponentFixture<EducationSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
