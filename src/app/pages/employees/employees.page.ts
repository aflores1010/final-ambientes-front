import { Component } from '@angular/core';
import { EmployeeInterface } from 'src/app/interfaces/employee.interface';
import { ModalController } from '@ionic/angular';
import { employeesMock } from 'src/app/mock/employees.mock';
import { EmployeeInfoModalComponent } from 'src/app/components/employee-info-modal/employee-info-modal.component';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})

export class EmployeesPage {


  employees: EmployeeInterface[] = [];
  tempArray: EmployeeInterface[] = [];


  constructor(private modalController: ModalController, private connectionService: ConnectionService) {
    this.employees = employeesMock;
    this.tempArray = this.employees;
  }

  search(event){
    const searchTerm = event.detail.value;

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

    public getEmployees() {
      this.connectionService.getEmployees().subscribe((resp: EmployeeInterface[])=> {
        console.log(resp);
        this.employees = resp;
      });
    }

}
