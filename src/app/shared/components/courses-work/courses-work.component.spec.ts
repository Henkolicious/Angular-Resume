import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWorkComponent } from './courses-work.component';

describe('CoursesWorkComponent', () => {
  let component: CoursesWorkComponent;
  let fixture: ComponentFixture<CoursesWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
