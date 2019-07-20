import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-employee-info-modal',
  templateUrl: './employee-info-modal.component.html',
  styleUrls: ['./employee-info-modal.component.scss'],
})
export class EmployeeInfoModalComponent implements OnInit {

  @Input() employeeInfo: string;

  constructor(private modalController: ModalController) {
   }

  ngOnInit() {
    console.log(this.employeeInfo);
  }

  exit() {
    this.modalController.dismiss();
  }

}
