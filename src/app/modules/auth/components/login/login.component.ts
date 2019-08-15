import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, Validators } from '@angular/forms';

import { ComposerComponent, FormRow } from '@mod/form';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: false }) public form: ComposerComponent;
  rows: FormRow[];

  constructor() {
    this.rows = [
      {
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
        // sizes: {
        //   s: 2
        // }
      }
    ];
  }

  public ngOnInit(): void {}

  public login(): void {
    console.log('loggin in');
    this.form.submit();
  }
}
