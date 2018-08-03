import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { catchError, map, retry } from "rxjs/operators";
import { environment } from "../../../environments/environment";

/* Models */
import { IEmployment } from "../../models/interfaces/IEmployment";
import { IProfile } from "../../models/interfaces/IProfile";
import { IProgrammingLanguage } from "../../models/interfaces/IProgrammingLanguage";
import { IEducation } from "../../models/interfaces/IEducation";
import { ICourses } from "../../models/interfaces/ICourses";
import { IEnviroment } from "../../models/interfaces/IEnviroment";
import { IUserAgent } from "../../models/interfaces/IUserAgent";

@Injectable()
export class DataAccessService {
  private baseUrl: string;
  private port: string;
  private apiProfileUrl: string;
  private apiEmplymentUrl: string;
  private apiProgrammingLanguageUrl: string;
  private apiEducationUrl: string;
  private apiCoursesUniversityUrl: string;
  private apiCoursesWorkUrl: string;
  private apiEnviromentUrl: string;
  private ipInfoUrl: string = "http://ipinfo.io";
  private googleRecaptchaVerificationUrl: string = "https://www.google.com/recaptcha/api/siteverify";

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.port = window.location.port;
    } else {
      this.port = ":446";
    }

    this.baseUrl = `${window.location.protocol}//${window.location.hostname}${this.port}`;
    this.apiProfileUrl = this.baseUrl + "/api/resume/profile.php";
    this.apiEmplymentUrl = this.baseUrl + "/api/resume/employments.php";
    this.apiProgrammingLanguageUrl =
      this.baseUrl + "/api/resume/programming-languages.php";
    this.apiEducationUrl = this.baseUrl + "/api/resume/education.php";
    this.apiCoursesUniversityUrl =
      this.baseUrl + "/api/resume/courses_university.php";
    this.apiCoursesWorkUrl = this.baseUrl + "/api/resume/courses_work.php";
    this.apiEnviromentUrl = this.baseUrl + "/api/resume/enviroments.php";    
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
    return this.http.get<IEducation[]>(this.apiEducationUrl).pipe(
      retry(3),
      catchError(() =>
        Observable.throw("ERROR: Could not get educations from the server.")
      )
    );
  }

  public getCoursesUniversity(): Observable<ICourses[]> {
    return this.http.get<ICourses[]>(this.apiCoursesUniversityUrl).pipe(
      retry(3),
      catchError(() =>
        Observable.throw(
          "ERROR: Could not get university courses from the server."
        )
      )
    );
  }

  public getCoursesWork(): Observable<ICourses[]> {
    return this.http.get<ICourses[]>(this.apiCoursesWorkUrl).pipe(
      retry(3),
      catchError(() =>
        Observable.throw("ERROR: Could not get work courses from the server.")
      )
    );
  }

  public getEnviroments(): Observable<IEnviroment[]> {
    return this.http.get<IEnviroment[]>(this.apiEnviromentUrl).pipe(
      retry(3),
      catchError(() =>
        Observable.throw("ERROR: Could not get enviroments from the server.")
      )
    );
  }

  public validateRecaptcha(response: string, clientIP?: string): Observable<any> {
    let data = {
      secret: "6LfwqWcUAAAAAJ9r_mpqg0KJQf0tZW7t09hEzM43",
      response: response,
      remoteip: clientIP
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': '6LfwqWcUAAAAAJ9r_mpqg0KJQf0tZW7t09hEzM43',
        'Access-Control-Allow-Origin': '*'
      })
    };
    
    console.log("Sending this data.");    
    console.log(this.googleRecaptchaVerificationUrl);
    console.log(data);
    console.log(httpOptions);
    
    let googleResponse = this.http.post(this.googleRecaptchaVerificationUrl, data, httpOptions);
    console.log("Response from google.");
    console.log(googleResponse);

    return googleResponse;
  }

  public getClientInformation(): Observable<IUserAgent> {
    return this.http.get<IUserAgent>(this.ipInfoUrl);
  }
}
