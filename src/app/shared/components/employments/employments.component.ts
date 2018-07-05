import { Component, OnInit } from "@angular/core";
import { DataAccessService } from "../../services/data-access.service";
import { IEmployment } from "../../../models/interfaces/IEmployment";

@Component({
  selector: "app-employments",
  templateUrl: "./employments.component.html",
  styleUrls: ["./employments.component.scss"]
})
export class EmploymentsComponent implements OnInit {
  employments: IEmployment[] = [];

  constructor(private _dao: DataAccessService) {}

  ngOnInit() {
    this._dao.getEmplyments().subscribe(res => {
      this.employments = res;
    });
  }
}
