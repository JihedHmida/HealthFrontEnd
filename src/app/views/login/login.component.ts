import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../dto/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users = [];
  constructor(private svc: UserService) { }

  ngOnInit() {
    this.svc.getAllUsers().subscribe( data => this.users = data);
  }

}
