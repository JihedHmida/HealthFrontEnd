import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../dto/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User() ;
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  createUser() {
    this.userService.getUser(this.user).subscribe();
    // this.userService.addUser(this.user).subscribe();
    // this.userService.getAllUsers().subscribe((respons) => this.users = respons);
  }

}
