import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AuthInitCheck,
  AuthLoginMail,
  AuthLoginRequest,
  AuthLogoutRequest,
  AuthState,
  getLoggedUser,
  LoggedUser
} from '@bab/auth';

@Component({
  selector: 'auth-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<LoggedUser | null>;

  constructor(private store: Store<AuthState>) {}

  public ngOnInit(): void {
    this.store.dispatch(new AuthInitCheck());
    this.user$ = this.store.select(getLoggedUser);
  }

  public login(data: AuthLoginMail): void {
    this.store.dispatch(new AuthLoginRequest(data));
  }

  public logout(): void {
    this.store.dispatch(new AuthLogoutRequest());
  }
}
