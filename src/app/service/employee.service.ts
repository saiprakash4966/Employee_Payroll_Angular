import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../emp.Model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl:string = "http://localhost:8080/employeepayroll"
  
  constructor(private http:HttpClient) { }
  getemployeelist(){
    return this.http.get("http://localhost:8080/employeepayroll/");
  }
  insertEmployee(employee:any){
    return this.http.post("http://localhost:8080/employeepayroll/create", employee);
  }
  updateEmp(Id:number, employee:any){
    return this.http.put("http://localhost:8080/employeepayroll/update/{employeeId}"+Id, employee);
  }
  getEmpById(Id:number){
    return this.http.get("http://localhost:8080/employeepayroll/get/{employeeId}"+Id);
  }
  deleteEmp(Id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/employeepayroll/delete/{employeeId}"+Id);
  }
}
