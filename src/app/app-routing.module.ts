import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PracticesComponent } from './pages/practices/practices.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { EmployeeBasicsComponent } from './pages/employee-content/employee-basics/employee-basics.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'practices', component: PracticesComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [{ path: 'basics', component: EmployeeBasicsComponent }],
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
