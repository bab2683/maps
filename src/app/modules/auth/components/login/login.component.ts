import { Component, OnInit } from '@angular/core';
import { EmailValidator, Validators } from '@angular/forms';

import { FormComposer } from '@mod/form';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormComposer;

  constructor() {
    this.form = {
      rows: [
        {
          b: 1,
          fields: [
            {
              name: 'email',
              placeholder: 'Your email',
              type: 'email',
              validators: [new EmailValidator(), Validators.required]
            },
            {
              name: 'password',
              placeholder: 'Your password',
              type: 'password',
              validators: [Validators.required]
            }
          ]
        }
      ],
      submitText: 'Continue'
    };
  }

  public ngOnInit(): void {}
}
