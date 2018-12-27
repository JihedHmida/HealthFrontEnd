import { Component, OnDestroy } from '@angular/core';
import { User } from './dto/user';
import { SessionService } from './services/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'health-client';
  loggedUser: User;
  sub: Subscription;
  constructor(private session: SessionService) {
    this.sub = this.session.getLoggedUser().subscribe(userx => this.loggedUser = userx);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
