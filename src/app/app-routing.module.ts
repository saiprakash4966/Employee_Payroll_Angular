import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EmployeeComponent } from './components/employee-payroll/employee-payroll.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'adduser', component: AdduserComponent},
  {path:"updateEmp/:Id",component:AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }