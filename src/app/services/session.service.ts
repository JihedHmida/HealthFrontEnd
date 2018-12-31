import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { User } from '../dto/user';
import { Subject, Observable } from 'rxjs';
import { MainContentComponent } from '../views/main-content/main-content.component';
@Injectable({
  providedIn: 'root'
})
export class SessionService implements OnInit {


  private loggedUser = new Subject<User>();
  private user;
  constructor() {}

  ngOnInit() {
    this.user = new User();
  }

  setLoggedUser(user: User) {
    this.user = user;
    this.loggedUser.next(user);
    console.log('logged user set to :' + user);
  }
  getLoggedUser(): Observable<User> {
    return this.loggedUser.asObservable();
  }

  getUser(): User {
    return this.user;
  }

  clearLoggedUser() {
    this.loggedUser.next();
    this.user = new User();

  }
}
