import { Component, Input, OnInit } from '@angular/core';
import { User } from 'firebase/app';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {
  @Input() user: User;

  constructor(private auth: AuthService) {}

  public ngOnInit(): void {
    console.log(this.user);
  }

  public logout(): void {
    this.auth.logout();
  }
}
