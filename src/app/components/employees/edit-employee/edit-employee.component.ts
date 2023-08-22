import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit
{
   
   getEmployeeRequest: Employee = {
    id : '',
    name : '',
    email : '',
    phone : 0,
    salary : 0,
    department : '',
   };

   constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router){} 
    ngOnInit(): void {
      this.route.paramMap
      .subscribe({
        next: (params) =>
        {
           const id = params.get('id');
           if(id)
           {
             //call api 
             this.employeesService.getEmployee(id)
             .subscribe({
              next : (response) => 
              {
                 this.getEmployeeRequest = response;
                 console.log(response);
              }
             })
           }
        }
      })  
    }

    updateEmployee()
    {
       this.employeesService.updateEmployee(this.getEmployeeRequest.id,this.getEmployeeRequest)
       .subscribe({
        next : () =>
        {
          this.router.navigate(['/employees']);       
        }
       })
    }
}
