import { ConsultationService } from './../../services/consultation.service';
import { Consultation } from './../../dto/consultation';
import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-consultationlist',
  templateUrl: './consultationlist.component.html',
  styleUrls: ['./consultationlist.component.css']
})
export class ConsultationlistComponent implements OnInit {

  private consultations: Consultation[] ;
  constructor(private consultationService: ConsultationService, private router: Router) { }

  ngOnInit() {
    this.consultationService.getAllConsultation().subscribe((consultations: Consultation[]) => {
      this.consultations = consultations ;
      console.log(this.consultations);
    } );

  }

  deleteConsultation(consultation) {
    this.consultationService.deleteConsultation(consultation.id).subscribe((data) => {
      this.consultations.splice(this.consultations.indexOf(consultation), 1);
    });
  }

  updateConsultation(consultation) {
    this.consultationService.consultationSetter(consultation);
    this.router.navigate(['/consultation']);
  }

  createConsultation() {
    let consultation ;
    consultation = new Consultation();
    this.consultationService.consultationSetter(consultation);
    this.router.navigate(['/consultation']);
  }


}
