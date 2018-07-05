import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingTableComponent } from './programming-table.component';

describe('ProgrammingTableComponent', () => {
  let component: ProgrammingTableComponent;
  let fixture: ComponentFixture<ProgrammingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
