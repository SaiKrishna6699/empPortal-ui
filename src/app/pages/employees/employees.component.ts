import { Component } from '@angular/core';
import { NormService } from 'src/app/services/normal-services/norm.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  constructor(private normSer: NormService) {}

  onClick(link: string) {
    this.normSer.onClick(link);
  }

  emp_tiles = [
    {
      title: 'Employee Basic Details',
      desc: 'Manage employee details',
      icon: 'fa-solid fa-user-tie',
      bgColor: 'bg-orange-500',
      link: 'employees/basics',
    },
    {
      title: 'Employee Project & Reporting Structure',
      desc: 'Manage employee project and reporting structure',
      icon: 'fa-solid fa-people-arrows',
      bgColor: 'bg-blue-500',
      link: '/',
    },
    {
      title: 'Customer Onboarding',
      desc: 'Manage customer details',
      icon: 'fa-solid fa-coins',
      bgColor: 'bg-rose-500',
      link: '/',
    },
    {
      title: 'Employee Documents',
      desc: 'Manage employee documents',
      icon: 'fa-solid fa-file',
      bgColor: 'bg-green-600',
      link: '/',
    },
  ];
}
