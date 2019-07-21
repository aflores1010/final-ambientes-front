import { Component, OnInit } from '@angular/core';
import { PaymentInterface } from 'src/app/interfaces/payment.interface';
import { paymentMock } from '../../mock/payments.mock'
import { EmployeeInterface } from 'src/app/interfaces/employee.interface';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  payments: PaymentInterface[] = [];
  temPayments: PaymentInterface[] = [];
  employee: EmployeeInterface;


  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.payments = paymentMock;
    this.temPayments = this.payments;
  }

  search(event) {
    const searchTerm = event.detail.value;

    let filteredElements = this.temPayments.filter((item) => {
     return (item.fecha_pago.toLowerCase().indexOf(
       searchTerm.toLowerCase()) > -1) 
       || 
       (item.concepto_pago.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1);
     });

     if(searchTerm == '') {
      this.payments = this.temPayments;
     } else {
      this.payments = filteredElements;
     }
 
  }

  getPayments() {
      this.connectionService.getEmployeePayments(this.employee.cedula).subscribe((resp: PaymentInterface[])=> {
        console.log(resp);
        this.payments = resp;
      });
    }

}
