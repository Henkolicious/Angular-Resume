/* core */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA  } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* animations */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/* Routes */
import { AppRoutingModule } from "./router/routes";

/* Services */
import { DataAccessService } from "./shared/services/data-access.service";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

/* pipes */
import { SafeHtmlPipe } from './shared/pipes/safe-html';

/* vendor */
import {
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
} from "@angular/material";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

/* components */
import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/about/about.component";
import { EducationComponent } from "./pages/education/education.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProgrammingTableComponent } from "./shared/components/programming-table/programming-table.component";
import { ProfileComponent } from './shared/components/profile/profile.component';
import { GeneralComponent } from './shared/components/general/general.component';
import { EmploymentsComponent } from './shared/components/employments/employments.component';
import { EducationSchoolComponent } from './shared/components/education-school/education-school.component';
import { CoursesUniversityComponent } from './shared/components/courses-university/courses-university.component';
import { CoursesWorkComponent } from './shared/components/courses-work/courses-work.component';
import { EnviromentsComponent } from './shared/components/enviroments/enviroments.component';
import { EnviromentComponent } from './pages/enviroment/enviroment.component';
import { ContactFormComponent } from './shared/components/contact-form/contact-form.component';
import { HeroFormComponent } from './shared/components/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    ProgrammingTableComponent,
    SafeHtmlPipe,
    ProfileComponent,
    GeneralComponent,
    EmploymentsComponent,
    EducationSchoolComponent,
    CoursesUniversityComponent,
    CoursesWorkComponent,
    EnviromentsComponent,
    EnviromentComponent,
    ContactFormComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [DataAccessService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
