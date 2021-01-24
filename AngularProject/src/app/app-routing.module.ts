import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublichomeComponent } from './publichome/publichome.component';
import { HomepageComponent } from './publichome/homepage/homepage.component';
import { LoginComponent } from './publichome/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { AdminlistComponent } from './user/adminlist/adminlist.component';
import { EmployeelistComponent } from './user/employeelist/employeelist.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';


const routes: Routes = [
  {path:'',redirectTo:'/publichome/homepage',pathMatch:'full'},
  {
    path: 'publichome', component: PublichomeComponent,
    children: [
      { path: 'homepage', component: HomepageComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'',redirectTo:'/user/home',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'home', component: HomeComponent,canActivate:[AuthGuard],data : {permittedRoles:['Admin','Leader']} },
      { path: 'adminlist', component: AdminlistComponent,canActivate:[AuthGuard],data : {permittedRoles:['Admin','Leader']} },
      { path: 'employeelist', component: EmployeelistComponent,canActivate:[AuthGuard],data : {permittedRoles:['Admin','Leader']} }
    ]
  },
  {path:'forbidden',component:ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
