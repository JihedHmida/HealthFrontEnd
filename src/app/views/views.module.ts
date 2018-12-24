import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavBarComponent, MainContentComponent, SideBarComponent, LoginComponent, DoctorSignupComponent, PatientSignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    MainContentComponent,
    SideBarComponent,
    LoginComponent
  ],
  providers: [
  ]

})
export class ViewsModule { }
