import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';
import { UserProfile } from 'src/app/shared/UserProfile';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router : Router,private service : ServiceService , private toastr : ToastrService) { }

  ngOnInit() {

    this.toastr.success('Here You Can See Staff stats','');

    this.service.getUserProfile().subscribe(
      data =>
        this.userDetails = data as UserProfile
      ,
      err =>
        console.log(err)
    );
  }

}
