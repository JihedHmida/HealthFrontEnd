import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Consultation } from './../dto/consultation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
 };


@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private base_url = 'http://localhost:8080/consultation/';
  constructor(private http: HttpClient) { }

  saveConsultation(consultation: Consultation): Observable<Consultation> {
    return this.http.post<Consultation>(this.base_url + 'add' , consultation, httpOptions);
  }

  getAllConsultation() {
    return this.http.get(this.base_url, httpOptions );
  }


  findConsultationByID(id) {
    return this.http.get(this.base_url + id + httpOptions );
  }


  getConsultationsByDoctorId(id) {
    return this.http.get(this.base_url + 'doctor' + id , httpOptions );
  }

  getConsultationsByPatientId(id) {
    return this.http.get(this.base_url + 'patient' + id , httpOptions );
  }

}
