import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/shared/RegisterModel';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styles: []
})
export class AdminlistComponent implements OnInit {

  constructor(private service : ServiceService, private toastr : ToastrService) { }

  id : string;

  ngOnInit() {
    this.service.UpdateformModel();
    this.service.GetUsersList();
    this.Clear();
    this.toastr.success('Here You Can Add Or Edit Or Delete Another Account To Manage Employee List','');
  }

  Clear()
  {
    this.service.id = "";
    this.service.userName = "";
    this.service.fullName = null;
    this.service.Password = "";
    this.service.Oldpassword = "";
  }

  populateForm(pd : RegisterModel)
  {
    this.service.id = pd.id;
    this.service.fullName = pd.fullName;
    this.service.Password = '';
    this.service.Oldpassword = '';
    this.service.userName = pd.userName;
    this.service.role = pd.role;
  }

  onSubmit(form?:NgForm)
  {

    this.service.RegisterAdmin().subscribe(res=>
      {
        this.toastr.success('Success','');
        this.service.UpdateformModel();
        this.service.GetUsersList();
        this.Clear();
      },
      err=>{
        alert('Enter Password OR Other Password')
      })
  }

  onDelete(pd : RegisterModel)
  {
    if (confirm("Are You sure to delete this record ?"))
    {
    this.service.Delete(pd.id).subscribe(res=>
      {
        this.Clear();
        this.toastr.success('Success','Delete');
        this.service.GetUsersList();
      },
      err=>{
        alert('Deleted Successfully')
      })
    }
  }

}
