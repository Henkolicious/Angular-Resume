import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

/* animations */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/* Routes */
import { AppRoutingModule } from "./router/routes";

/* Services */
import { DataAccessService } from "./services/data-access.service";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

import { SafeHtmlPipe } from './pipes/safe-html';

/* vendor */
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* components*/
import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/about/about.component";
import { EducationComponent } from "./pages/education/education.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProgrammingTableComponent } from "./pages/skills/programming-table/programming-table.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    ProgrammingTableComponent,
    SafeHtmlPipe
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
    MatInputModule
  ],
  providers: [DataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule {}
