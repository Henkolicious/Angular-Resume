import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../services/data-access.service';
import { IEnviroment } from '../../../models/interfaces/IEnviroment';

@Component({
  selector: 'app-enviroments',
  templateUrl: './enviroments.component.html',
  styleUrls: ['./enviroments.component.scss']
})
export class EnviromentsComponent implements OnInit {

  public sectionHeader: string = "Enviroments";
  public enviroments: IEnviroment[] = [];
  
  constructor(private _dao: DataAccessService) { }

  ngOnInit() {
    this._dao.getEnviroments().subscribe(res => {      
      this.enviroments = res;
    });
  }

}
