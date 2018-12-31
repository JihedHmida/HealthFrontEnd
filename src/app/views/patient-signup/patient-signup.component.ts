import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/dto/patient';
import { PatientService } from 'src/app/services/patient.service';
import { User } from 'src/app/dto/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  patient: Patient;
  user: User;
  private patientError: Patient;
  private patientExist: Boolean;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.patient = new Patient();
    this.user = new User();
    this.patientExist = false ;
  }

  createPatient() {
    this.user.userName = this.patient.email;
    this.patient.user = this.user;
    this.patientService.addPatient(this.patient).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        if (error.status === 409) {
            this.patientExist = true ;
        }
          this.patientError = error.error;
          console.log(this.patientError);
      }
    );
  }

}
