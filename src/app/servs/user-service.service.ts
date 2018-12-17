import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  users: User[];
  http: HttpClient;

  Getusers() {

  }
}
