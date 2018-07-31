import { Component, OnInit } from '@angular/core';
import { ICourses } from '../../../models/interfaces/ICourses';

@Component({
  selector: 'app-courses-work',
  templateUrl: './courses-work.component.html',
  styleUrls: ['./courses-work.component.scss']
})
export class CoursesWorkComponent implements OnInit {

  workCourses: ICourses[] = [];
  sectionHeader: string = "Courses through work";

  constructor() { }

  ngOnInit() {
  }

}
