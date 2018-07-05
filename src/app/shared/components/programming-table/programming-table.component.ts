import {
  Component,
  OnInit,
  ViewChild,  
  HostListener
} from "@angular/core";
import { IProgrammingLanguage } from "../../../models/interfaces/IProgrammingLanguage";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { DataAccessService } from "../../services/data-access.service";

@Component({
  selector: "app-programming-table",
  templateUrl: "./programming-table.component.html",
  styleUrls: ["./programming-table.component.scss"]
})
export class ProgrammingTableComponent implements OnInit {
  displayedColumns = ["Id", "Language", "Knowledge", "Description"];
  dataSource: MatTableDataSource<IProgrammingLanguage>;
  dataHeaders: string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.setDispayedTableColumns(event.target.innerWidth);
  }

  constructor(private _dao: DataAccessService) {}

  ngOnInit() {
    this._dao.getProgrammingLanguages().subscribe(
      (data: IProgrammingLanguage[]) => {
        this.bindProgrammingData(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.setDispayedTableColumns(window.innerWidth);
  }

  setDispayedTableColumns(width: number) {
    this.displayedColumns =
      width <= 900
        ? ["Language", "Knowledge", "Description"]
        : ["Id", "Language", "Knowledge", "Description"];

    this.dataHeaders =
      width <= 900
        ? ["#", "Lang.", "Knowl.", "Desc."]
        : ["#", "Language", "Knowledge", "Description"];
  }

  bindProgrammingData(data: IProgrammingLanguage[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
