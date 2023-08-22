import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginForm:FormBuilder, private employeeService: EmployeesService, private router: Router){}
  formCredentials : FormGroup = this.loginForm.group(
    {
      email : ["", Validators.required],
      password : ["", Validators.required]
    }
   )
  ngOnInit() 
  {
        
  }

  OnSubmit()
  {
    this.employeeService.loginEmployee(this.formCredentials?.value)
    .subscribe({
      next : (response) => 
      {
          console.log(response);
          this.employeeService.storeToken(response.token)
          this.router.navigate(['/employees']);
          
      },
      error : (err) =>
      {
         alert("Incorrect Email Or Password");
      }
      });
  }
}