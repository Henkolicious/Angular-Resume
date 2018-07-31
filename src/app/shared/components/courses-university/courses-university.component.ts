import { Component, OnInit } from '@angular/core';
import { ICourses } from '../../../models/interfaces/ICourses';
import { DataAccessService } from '../../services/data-access.service';

@Component({
  selector: 'app-courses-university',
  templateUrl: './courses-university.component.html',
  styleUrls: ['./courses-university.component.scss']
})
export class CoursesUniversityComponent implements OnInit {

  universityCourses: ICourses[] = [];
  sectionHeader: string = "Standalone university courses";

  constructor(private _dao: DataAccessService) { }

  ngOnInit() {
    this._dao.getCoursesUniversity().subscribe(res => {
      console.log(res);
      this.universityCourses = res;
    });
  }

}