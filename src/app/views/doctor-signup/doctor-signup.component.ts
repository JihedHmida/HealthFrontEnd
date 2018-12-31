import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/dto/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { User } from 'src/app/dto/user';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  public doctor: Doctor;
  public user: User;
  private doctorError: Doctor;
  private doctorExist: Boolean;

  constructor(private doctorService: DoctorService, private router: Router, private session: SessionService) { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.user = new User();
    this.doctorExist = false ;
  }

  createDoctor() {
    this.user.userName = this.doctor.email;
    this.doctor.user = this.user;
    this.doctorService.addDoctor(this.doctor).subscribe(
      data => {
        this.session.setLoggedUser(this.user);
        this.router.navigate(['/home']);
      },
      error => {
        if (error.status === 409) {
            this.doctorExist = true ;
        }
          this.doctorError = error.error;
      }
    );
  }

}
