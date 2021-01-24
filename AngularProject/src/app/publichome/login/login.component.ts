import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName : '',
    Password : ''
  };
  
  constructor(private service:ServiceService, private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
    {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        this.toastr.success('Success','LogIn');
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/user/home');
      },
      err => {
        if (err.status == 400)
          alert('Incorrect username or password.');
        else
          console.log(err);
      }
    );
  }

}
