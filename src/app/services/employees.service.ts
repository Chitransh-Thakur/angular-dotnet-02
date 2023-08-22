import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient) {  
  }
    getAllEmployees() : Observable<Employee[]>
    {
       return this.http.get<Employee[]>(this.baseUrl + 'api/Employees');
    }

    addEmployee(addEmployeeRequest: Employee) : Observable<Employee[]>
    {
       addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
       return this.http.post<Employee[]>(this.baseUrl + 'api/Employees',addEmployeeRequest);
    } 

    getEmployee(id: string) : Observable<Employee>
    {
      return this.http.get<Employee>(this.baseUrl + 'api/Employees/' + id) 
    }

    updateEmployee(id: string, updateEmployeeRequest: Employee) : Observable<Employee>
    {
      return this.http.put<Employee>(this.baseUrl + 'api/Employees/' + id,updateEmployeeRequest) 
    }

    deleteEmployee(id: string) : Observable<Employee>
    {
      return this.http.delete<Employee>(this.baseUrl + 'api/Employees/' + id);
    }

    loginEmployee(user: User) : Observable<any>
    {
      return this.http.post<User>(this.baseUrl + 'api/Employees/login',user);
    }

    storeToken(tokenValue: string)
    {
      localStorage.setItem('token',tokenValue);
    }

    getToken()
    {
      return localStorage.getItem('token');
    }

    IsLoggedIn()
    {
      return !!localStorage.getItem('token');
    }
}
