import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { LoginComponent } from './components/employees/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'employees',
    component : EmployeeListComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'employees/add',
    component : AddEmployeeComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'employees/edit/:id',
    component : EditEmployeeComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
