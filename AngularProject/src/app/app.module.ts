import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceService } from './shared/service.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublichomeComponent } from './publichome/publichome.component';
import { HomepageComponent } from './publichome/homepage/homepage.component';
import { LoginComponent } from './publichome/login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { AdminlistComponent } from './user/adminlist/adminlist.component';
import { EmployeelistComponent } from './user/employeelist/employeelist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    PublichomeComponent,
    HomepageComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    AdminlistComponent,
    EmployeelistComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
