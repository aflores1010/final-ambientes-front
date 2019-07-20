import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-info-modal',
  templateUrl: './employee-info-modal.component.html',
  styleUrls: ['./employee-info-modal.component.scss'],
})
export class EmployeeInfoModalComponent implements OnInit {

  @Input() employeeInfo: string;

  constructor(private modalController: ModalController, private router: Router) {
   }

  ngOnInit() {
    console.log(this.employeeInfo);
  }

  exit() {
    this.modalController.dismiss();
  }

  goToPayments( cedula ) {
    this.modalController.dismiss();
    this.router.navigate(['/payments', { cedula: cedula }]);
  }

}
