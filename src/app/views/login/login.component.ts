import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../dto/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  getUser() {
    this.userService.getUser(this.user).subscribe((userx) => {
      this.user = userx;
      if (!this.user.userId) {
      alert('wrong login or password ');
      this.router.navigate(['/login']);
      } else {
      this.router.navigate(['/home']);
      }
    });
  }

}
