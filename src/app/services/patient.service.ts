import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../dto/patient';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  base_url = 'http://localhost:8080/patient';

  constructor(private http: HttpClient) { }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.base_url + '/add', patient, httpOptions);
  }
}
