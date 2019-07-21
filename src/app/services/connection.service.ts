import { Injectable } from '@angular/core';
import { EmployeeInterface } from '../interfaces/employee.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { PaymentInterface } from '../interfaces/payment.interface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

   

  constructor(private http: HttpClient) { }
  
  private executeQuery<T>(query: string,) {
    query = URL + query;
    console.log('Query', query);
    return this.http.get<T>(query);
  }

  getEmployees() {
    return this.executeQuery<EmployeeInterface[]>('/empleados');
  }

  getEmployeePayments(cedula: string) {
    return this.executeQuery<PaymentInterface[]>('/pagos?' + cedula);
  }

}
