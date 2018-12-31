import { Router } from '@angular/router';
import { ConsultationService } from './../../services/consultation.service';
import { Consultation } from './../../dto/consultation';
import { Doctor } from 'src/app/dto/doctor';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/dto/patient';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  private doctor: Doctor;
  private patient: Patient;
  private consultation: Consultation;
  private date = new Date ; // (1992, 11 , 31 , 12 , 55);
  constructor(private consultationService: ConsultationService , private router: Router) { }

  ngOnInit() {
    this.consultation = this.consultationService.consultationGetter();

   // this.doctor = new Doctor();
   // this.patient = new Patient();
   // this.consultation = new Consultation();
  }

  processForm() {
    if (this.consultation.id === undefined) {
      this.testfunction();
      this.consultationService.saveConsultation(this.consultation).subscribe();
      this.router.navigate(['/consultationlist']);
    } else {
      this.testfunction();
      this.consultationService.updateConsultation(this.consultation).subscribe();
      this.router.navigate(['/consultationlist']);
    }

  }

  testfunction() {
    this.consultation.doctor = new Doctor();
    this.consultation.patient = new Patient();
    this.consultation.patient.id = 3;
    this.consultation.doctor.id = 3;

  }

}
