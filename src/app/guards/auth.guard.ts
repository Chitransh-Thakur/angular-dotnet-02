import { Router } from "@angular/router";
import { EmployeesService } from "../services/employees.service";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  constructor(private authService: EmployeesService, private router:Router) { }

  canActivate(): boolean {
    if (this.authService.IsLoggedIn()) 
    {
      console.log("Authenticate");
      return true;
    } 
    else 
    {
      this.router.navigate([''])
      return false;
    }
  }
}
