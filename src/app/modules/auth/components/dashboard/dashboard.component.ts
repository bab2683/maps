import { Component } from '@angular/core';
import { User } from 'firebase/app';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user$: Observable<User | null>;

  constructor(private auth: AuthService) {
    this.user$ = this.auth.getUser();
  }
}
