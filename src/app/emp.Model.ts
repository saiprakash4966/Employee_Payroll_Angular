export class EmployeeModel {
    name: string = "";
    salary: number = 3000;
    profilePic: string = "";
    note: string = "";
    startDate: Date;
    gender:string = "";
    departments:string = ""
    constructor(note: string, date: Date, department: string, Name: string, profilePic: string, salary: number,gender:string) {
        this.startDate = date;
        this.departments = department;
        this.name = Name; 
        this.profilePic = profilePic;
        this.salary = salary;
        this.note=note;
        this.gender=gender;
    }
}