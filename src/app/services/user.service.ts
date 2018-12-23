import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../dto/user';
import { Observable } from 'rxjs';

const httpOptions = {
 headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllUsers (): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/user/add', user, httpOptions);
  }

  getUser (user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/user', user, httpOptions);
  }

}
