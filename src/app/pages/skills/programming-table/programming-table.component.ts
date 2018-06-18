import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  HostListener
} from "@angular/core";
import { ProgrammingLanguage } from "../../../models/interfaces/ProgrammingLanguage";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { DataAccessService } from "../../../services/data-access.service";

@Component({
  selector: "app-programming-table",
  templateUrl: "./programming-table.component.html",
  styleUrls: ["./programming-table.component.scss"]
})
export class ProgrammingTableComponent implements OnInit {
  displayedColumns = ["Id", "Language", "Knowledge", "Description"];
  dataSource: MatTableDataSource<ProgrammingLanguage>;
  programmingLanguage: ProgrammingLanguage[] = [];
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
      (data: ProgrammingLanguage[]) => {
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

  bindProgrammingData(data: ProgrammingLanguage[]) {
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
