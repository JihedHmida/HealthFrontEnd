import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/dto/user';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() user: User;
  constructor(private session: SessionService, private userService: UserService) { }

  ngOnInit() {

  }
  logout() {
    this.session.clearLoggedUser();
  }

}
