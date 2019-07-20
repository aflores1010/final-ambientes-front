import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeesPage } from './employees.page';
import { EmployeeInfoModalComponent } from 'src/app/components/employee-info-modal/employee-info-modal.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [EmployeeInfoModalComponent],
  declarations: [EmployeesPage, EmployeeInfoModalComponent]
})
export class EmployeesPageModule {}
