import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isLoggedin: Observable<boolean>;

  constructor(private auth: AuthService) {
    this.isLoggedin = this.auth.isLoggedIn();
  }
}
