import { Component } from '@angular/core';
import { EmployeeInterface } from '../interfaces/employee.interface';
import {employeesMock} from '../mock/employees.mock'
import { EmployeeInfoModalComponent } from '../components/employee-info-modal/employee-info-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  employees: EmployeeInterface[] = [];
  tempArray: EmployeeInterface[] = [];


  constructor(private modalController: ModalController) {
    this.employees = employeesMock;
    this.tempArray = this.employees;
  }

  search(event){
    const searchTerm = event.detail.value;
    console.log('searching ', searchTerm);

    let filteredElements = this.tempArray.filter((item) => {
     return (item.nombre.toLowerCase().indexOf(
       searchTerm.toLowerCase()) > -1) 
       || 
       (item.apellido.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1)
       || 
       (item.cedula.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1);
     });

     if(searchTerm == '') {
      this.employees = this.tempArray;
     } else {
      this.employees = filteredElements;
     }
 
    }

    async selectEmlpoyee(employee: EmployeeInterface) {
        const modal = await this.modalController.create({
          component: EmployeeInfoModalComponent, 
          showBackdrop: true, 
          componentProps : 
          {
            employeeInfo: employee
          }
        });
        return await modal.present();
      }


}
