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
  private date = new Date(1992, 11 , 31 , 12 , 55);
  private consultation: Consultation;
  constructor(private consultationService: ConsultationService) { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.patient = new Patient();
    this.consultation = new Consultation();
  }

  saveConsultation() {
    this.consultation.date = this.date;
    this.consultation.doctor = new Doctor();
    this.consultation.patient = new Patient();
    this.consultation.patient.id = 3;
    this.consultation.doctor.id = 1;
    console.log(this.consultation);
    this.consultationService.saveConsultation(this.consultation).subscribe();
  }

}
