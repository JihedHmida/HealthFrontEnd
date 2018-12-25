import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/dto/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { User } from 'src/app/dto/user';

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

  constructor(private doctorService: DoctorService) { }

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
        console.log(data);
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
