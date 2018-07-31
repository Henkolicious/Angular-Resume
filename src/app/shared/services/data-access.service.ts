import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { catchError, retry } from "rxjs/operators";
import { environment } from "../../../environments/environment";

/* Models */
import { IEmployment } from "../../models/interfaces/IEmployment";
import { IProfile } from "../../models/interfaces/IProfile";
import { IProgrammingLanguage } from "../../models/interfaces/IProgrammingLanguage";
import { IEducation } from "../../models/interfaces/IEducation";
import { ICourses } from "../../models/interfaces/ICourses";

@Injectable()
export class DataAccessService {
  private baseUrl: string;
  private port: string;
  private apiProfileUrl: string;
  private apiEmplymentUrl: string;
  private apiProgrammingLanguageUrl: string;
  private apiEducationUrl: string;
  private apiCoursesUniversity: string;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.port = window.location.port;
    } else {
      this.port = ":4203";
    }

    this.baseUrl = `${window.location.protocol}//${window.location.hostname}${this.port}`;
    this.apiProfileUrl = this.baseUrl + "/api/resume/profile.php";
    this.apiEmplymentUrl = this.baseUrl + "/api/resume/employments.php";
    this.apiProgrammingLanguageUrl = this.baseUrl + "/api/resume/programming-languages.php";
    this.apiEducationUrl = this.baseUrl + "/api/resume/education.php";
    this.apiCoursesUniversity = this.baseUrl + "/api/resume/courses_university.php";
  }

  public getProfile(): Observable<IProfile> {
    return this.http.get<IProfile>(this.apiProfileUrl).pipe(
      retry(3),
      catchError(() =>
        Observable.throw("ERROR: Could not get profile data from the server.")
      )
    );
  }

  public getEmplyments(): Observable<IEmployment[]> {
    return this.http.get<IEmployment[]>(this.apiEmplymentUrl).pipe(
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
      .get<IProgrammingLanguage[]>(this.apiProgrammingLanguageUrl)
      .pipe(
        retry(3),
        catchError(() =>
          Observable.throw(
            "ERROR: Could not get programming data table from the server."
          )
        )
      );
  }

  public getEducations(): Observable<IEducation[]> {
    return this.http
    .get<IEducation[]>(this.apiEducationUrl)
    .pipe(
      retry(3),
      catchError(() =>
        Observable.throw(
          "ERROR: Could not get educations from the server."
        )
      )
    );
  }

  public getCoursesUniversity(): Observable<ICourses[]> {
    return this.http
    .get<ICourses[]>(this.apiCoursesUniversity)
    .pipe(
      retry(3),
      catchError(() =>
        Observable.throw(
          "ERROR: Could not get educations from the server."
        )
      )
    );
  }
}
