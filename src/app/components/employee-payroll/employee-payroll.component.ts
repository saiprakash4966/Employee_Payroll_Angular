import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/emp.Model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployee: any
  updateId = 0;
  constructor(private servLayer:EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.get();
    
    
  }
  get(){
    this.servLayer.getemployeelist().subscribe(res=>{
      console.log(res)
      this.allEmployee =res
    })
    
  }
  deleteEmp(id:number){
    this.servLayer.deleteEmp(id).subscribe();
  }
  edit(Id:number){
    this.router.navigate(['updateEmp', Id])
  }

 

}