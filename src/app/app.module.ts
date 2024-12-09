import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NaviconComponent } from './components/navicon/navicon.component';
import { PracticesComponent } from './pages/practices/practices.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { NavcardComponent } from './components/navcard/navcard.component';
import { EmployeeBasicsComponent } from './pages/employee-content/employee-basics/employee-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NaviconComponent,
    PracticesComponent,
    EmployeesComponent,
    ProjectsComponent,
    ReportsComponent,
    NavcardComponent,
    EmployeeBasicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
