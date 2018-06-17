import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit
} from "@angular/core";
import { ProgrammingLanguage } from "../../../models/interfaces/ProgrammingLanguage";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { DataAccessService } from "../../../services/data-access.service";

@Component({
  selector: "app-programming-table",
  templateUrl: "./programming-table.component.html",
  styleUrls: ["./programming-table.component.scss"],
  // To override css on material tables
  encapsulation: ViewEncapsulation.None
})
export class ProgrammingTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ["id", "language", "knowledge", "description"];
  dataSource: MatTableDataSource<ProgrammingLanguage>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _dao: DataAccessService) {}

  ngOnInit() {
    this._dao.getProgrammingLanguages().subscribe(
      (data: ProgrammingLanguage[]) => {
        this.bindProgrammingData(data);
      },
      (error: any) => console.log(error)
    );
  }

  ngAfterViewInit() {
    //console.log(this.dataSource.sort);
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
