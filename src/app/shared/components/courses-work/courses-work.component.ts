import { Component, OnInit } from '@angular/core';
import { ICourses } from '../../../models/interfaces/ICourses';
import { DataAccessService } from '../../services/data-access.service';

@Component({
  selector: 'app-courses-work',
  templateUrl: './courses-work.component.html',
  styleUrls: ['./courses-work.component.scss']
})
export class CoursesWorkComponent implements OnInit {

  workCourses: ICourses[] = [];
  sectionHeader: string = "Courses through work";

  constructor(private _dao: DataAccessService) { }

  ngOnInit() {
    this._dao.getCoursesWork().subscribe(res => {      
      this.workCourses = res;
    });
  }

}
