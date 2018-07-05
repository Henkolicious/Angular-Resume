import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { catchError, retry } from "rxjs/operators";
import { environment } from "../../../environments/environment";

/* Models */
import { Employment } from "../../models/interfaces/Employment";
import { IProfile } from "../../models/interfaces/IProfile";
import { IProgrammingLanguage } from "../../models/interfaces/IProgrammingLanguage";

@Injectable()
export class DataAccessService {
  private baseUrl: string;
  private port: string;
  private apiProfileUrl: string;
  private apiEmplymentUrl: string;
  private programmingLanguageUrl: string;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.port = window.location.port;
    } else {
      this.port = ":4203";
    }

    this.baseUrl = `${window.location.protocol}//${window.location.hostname}${this.port}`;
    this.apiProfileUrl = this.baseUrl + "/api/resume/profile.php";
    this.apiEmplymentUrl = this.baseUrl + "/api/resume/employments.php";
    this.programmingLanguageUrl = this.baseUrl + "/api/resume/programming-languages.php";
  }

  public getProfile(): Observable<IProfile> {
    return this.http.get<IProfile>(this.apiProfileUrl).pipe(
      retry(3),
      catchError(() =>
        Observable.throw("ERROR: Could not get profile data from the server.")
      )
    );
  }

  public getEmplyments(): Observable<Employment[]> {
    return this.http.get<Employment[]>(this.apiEmplymentUrl).pipe(
      retry(3),
      catchError(() =>
        Observable.throw(
          "ERROR: Could not get employment data from the server."
        )
      )
    );
  }

  public getProgrammingLanguages(): Observable<IProgrammingLanguage[]> {
    return this.http
      .get<IProgrammingLanguage[]>(this.programmingLanguageUrl)
      .pipe(
        retry(3),
        catchError(() =>
          Observable.throw(
            "ERROR: Could not get programming data table from the server."
          )
        )
      );
  }
}
