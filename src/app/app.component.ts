import { Component, OnInit } from '@angular/core';
import { DataAccessService } from './services/data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _dao: DataAccessService) {}

  ngOnInit(){
    //   this._dao.getProfile().subscribe(data => {
    //   console.log(data);
    // });
  }
  
  ngAfterViewInit() {
    document.getElementById("global-spinner").style.display = 'none';
  }
}
