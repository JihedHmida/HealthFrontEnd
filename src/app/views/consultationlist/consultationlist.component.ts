import { ConsultationService } from './../../services/consultation.service';
import { Consultation } from './../../dto/consultation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultationlist',
  templateUrl: './consultationlist.component.html',
  styleUrls: ['./consultationlist.component.css']
})
export class ConsultationlistComponent implements OnInit {

  private consultations: Consultation[] ;
  private consultationx: Consultation;
  constructor(private consultationService: ConsultationService) { }

  ngOnInit() {
    this.consultationService.getAllConsultation().subscribe((consultations: Consultation[]) => {
      this.consultations = consultations ;
    } );

  }

}
