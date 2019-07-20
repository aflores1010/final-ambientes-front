import { Component, OnInit } from '@angular/core';
import { PaymentInterface } from 'src/app/interfaces/payment.interface';
import { paymentMock } from '../../mock/payments.mock'

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  payments: PaymentInterface[] = [];
  temPayments: PaymentInterface[] = [];



  constructor() { }

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

}
