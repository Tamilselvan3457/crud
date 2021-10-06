import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { IUser } from '../IUser';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  
   
  formvalue!:FormGroup;
  IUserobj:IUser = new IUser();
  employeedata! : any;
  api: any;
  showAdd!:boolean;
  showUpdate !:boolean;
  constructor( private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formvalue.reset();
    this.showAdd =true;
    this.showUpdate= false;
  }
  postEmployeeDetails(){
    this.IUserobj.firstName=this.formvalue.value.firstName;
    this.IUserobj.LastName=this.formvalue.value.lastName;
    this.IUserobj.email=this.formvalue.value.email;
    this.IUserobj.mobile=this.formvalue.value.mobile;
    this.IUserobj.salary=this.formvalue.value.salary;

    this.api.postEmploye(this.IUserobj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Employee Added successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
        this.formvalue.reset();
        this.getAllEmployee();
       },
      (       err: any)=>{
         alert("something went wrong")
       })
  }
  getAllEmployee(){
     this.api.getEmployee().subscribe((res: any)=>{
       this.employeedata= res;
     })
  }
  deleteEmployee(row:any){
    this.api.deleteEmployee(row.id )
    .subscribe((res: any)=>{
      alert("employee deleted")
      this.getAllEmployee();
    })
  }
  onEdit(row:any){
    this.showAdd =false;
    this.showUpdate= true;
    this.IUserobj.id=row.id;
    this.formvalue.controls['firstName'].setValue(row.firstName)
    this.formvalue.controls['lastName'].setValue(row.lastName)
    this.formvalue.controls['email'].setValue(row.email)
    this.formvalue.controls['mobile'].setValue(row.mobile)
    this.formvalue.controls['salary'].setValue(row.salary)
    
  }
  updateEmployeeDetails(){
    this.IUserobj.firstName=this.formvalue.value.firstName;
    this.IUserobj.LastName=this.formvalue.value.lastName;
    this.IUserobj.email=this.formvalue.value.email;
    this.IUserobj.mobile=this.formvalue.value.mobile;
    this.IUserobj.salary=this.formvalue.value.salary;
    this.api.updateEmployee(this.IUserobj,this.IUserobj.id)
    .subscribe((res: any)=>{
      alert("updated sucessfully");
      let ref=document.getElementById('cancel')
      ref?.click();
        this.formvalue.reset();
        this.getAllEmployee();
    })
  }
}
