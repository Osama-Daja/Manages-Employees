import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from 'src/app/shared/RegisterModel';
import { ServiceService } from 'src/app/shared/service.service';
import { EmployeeModel } from 'src/app/shared/EmployeeModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styles: []
})
export class EmployeelistComponent implements OnInit {

  constructor(private service : ServiceService , private toastr : ToastrService) { }

  ngOnInit() {
    this.service.UpdateformModel();
    this.service.GetEmployeeList();
    this.toastr.success('Here You Can Add Or Edit Or Delete Employee','');
  }

  Clear()
  {
    this.service.id = "";
    this.service.gender = "";
    this.service.age = null;
    this.service.name = "";
    this.service.dateOfEmployment = "";
  }

  populateForm(pd : EmployeeModel)
  {
    this.service.id = pd.id;
    this.service.name = pd.name;
    this.service.age = pd.age;
    this.service.gender = pd.gender;
    this.service.dateOfEmployment = pd.dateOfEmployment;
  }

  onDelete(pd : EmployeeModel)
  {
    if (confirm("Are You sure to delete this record ?"))
    {
    this.service.DeleteEmployee(pd.id).subscribe(res=>
      {
        this.toastr.success('Success','Delete');
        this.service.GetEmployeeList();
      },
      err=>{
        alert('Deleted Successfully')
      })
    }
  }

  onSubmit(form?:NgForm)
  {
    this.service.RegisterEmployee().subscribe(res=>
      {
        this.toastr.success('Success','');
        this.service.UpdateformModel();
        this.service.GetEmployeeList();
      },
      err=>{
        alert('Create user is not enable')
      })
}

SearchButton()
{
  this.service.SearchEmployee();
}

}
