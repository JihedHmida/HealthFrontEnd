import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../dto/doctor';
import { Observable } from 'rxjs';


const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
 };

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  base_url = 'http://localhost:8080/doctors';
  constructor(private http: HttpClient) { }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.base_url + '/add', doctor, httpOptions);
  }
}
