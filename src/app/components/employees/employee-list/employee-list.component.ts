import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit
{
    employees: Employee[] = [];

    constructor(private employeesService:EmployeesService, private router: Router){}

    ngOnInit(): void {
      this.loadEmployees();
    }

    loadEmployees(): void {
      this.employeesService.getAllEmployees()
        .subscribe({
          next: (employees: any[]) => {
            this.employees = employees;
          },
          error: (error: any) => {
            console.error('Error occurred while loading employees:', error);
          }
        });
    }
 
    deleteEmployee(id: string)
    {
      this.employeesService.deleteEmployee(id)
      .subscribe({
        next : () =>
        {
          console.log('deleted');
          this.loadEmployees();
          this.router.navigate(['/employees']);
        },
        error: (err) =>
        {
          console.log(err);
          
        }
      })    
    }
}
