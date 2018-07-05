import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../services/data-access.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  descriptions: string[];
  mainLanguage: string;
  secondaryLanguage: string;

  constructor(private _dao: DataAccessService) { }

  ngOnInit() {
    this._dao.getProfile().subscribe(res => {
      this.descriptions = res.DescriptionList;
      this.mainLanguage = res.MainLanguage;
      this.secondaryLanguage = res.SecondaryLanguage;
    });
  }

}
