import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoggedUser } from '../../auth.model';

@Component({
  selector: 'auth-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent {
  @Input() public user: LoggedUser;

  @Output() public logout: EventEmitter<void> = new EventEmitter();
}
