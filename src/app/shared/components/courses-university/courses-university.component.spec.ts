import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesUniversityComponent } from './courses-university.component';

describe('CoursesUniversityComponent', () => {
  let component: CoursesUniversityComponent;
  let fixture: ComponentFixture<CoursesUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
