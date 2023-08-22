import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesService } from '../services/employees.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: EmployeesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.auth.getToken();

    if(authToken)
    {
      request = request.clone(
        {
          setHeaders : {Authorization: authToken}
        }
      )
    }
    return next.handle(request);
  }
}
