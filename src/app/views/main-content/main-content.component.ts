import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from 'src/app/dto/user';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.user = this.session.getUser();
  }

}
