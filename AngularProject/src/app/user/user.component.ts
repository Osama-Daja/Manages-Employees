import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private router : Router,private service : ServiceService) { }

  ShowAdminPanel : boolean;
  ShowLeaderPanel : boolean;
  
  ngOnInit() {
    this.GetRole();
    
    
    if (this.service.formModel.value.Role == 'Admin')
    { this.ShowAdminPanel = true; } else { this.ShowAdminPanel = false; }

    if (this.service.formModel.value.Role == 'Admin')
    { this.ShowLeaderPanel = true; this.ShowAdminPanel = true; } 

  }
  

  GetRole()
  {  
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var UserRole = payLoad.role;
    this.service.formModel.value.Role = UserRole;
  }

  onLogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/publichome/homepage']);
  }

}
