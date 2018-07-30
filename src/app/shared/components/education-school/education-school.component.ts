import { Component, OnInit } from '@angular/core';
import { DataAccessService } from "../../services/data-access.service";
import { IEducation } from '../../../models/interfaces/IEducation';

@Component({
  selector: 'app-education-school',
  templateUrl: './education-school.component.html',
  styleUrls: ['./education-school.component.scss']
})
export class EducationSchoolComponent implements OnInit {

  educations: IEducation[] = [];
  sectionHeader: string = "Academics";

  constructor(private _dao: DataAccessService) { }

  ngOnInit() {
    this._dao.getEducations().subscribe(res => {
      console.log(res);
      
      this.educations = res;
    });
  }

}
