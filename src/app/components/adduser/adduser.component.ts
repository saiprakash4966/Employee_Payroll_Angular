import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/emp.Model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel("",new Date,"","","",0,"");
  userName = ""
  nameErr = ""
  Id: any = this.route.snapshot.paramMap.get("Id");
  constructor(private servLayer:EmployeeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.servLayer.getEmpById(this.Id).subscribe((res:any) =>{
      console.log(res)
      this.employee = res
   
    })}
    getVal(value:string){
      console.log(value)
      this.employee.departments=value.toString()
    }
    addEmployeeData() {
      alert("added successfully")
      console.log(this.employee);
      this.servLayer.insertEmployee(this.employee).subscribe((data:any) => {
        this.router.navigate(["/"])
      })}
      update(){
        this.servLayer.updateEmp(this.Id, this.employee).subscribe((res:any) =>{
         this.router.navigate(["/"])
        }
        )
       }
    
  }
 
    
  
  
