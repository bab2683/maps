import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { EmailValidator, Validators } from '@angular/forms';
import { AuthLoginMail } from '@bab/auth';

import { ComposerComponent, FormResult, FormRow } from '@mod/form';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('form', { static: false }) public form: ComposerComponent;
  rows: FormRow[];

  @Output() loginData: EventEmitter<AuthLoginMail> = new EventEmitter();

  constructor() {
    this.rows = [
      {
        fields: [
          {
            label: 'Your email',
            name: 'email',
            type: 'email',
            validators: [new EmailValidator(), Validators.required]
          },
          {
            label: 'Your password',
            name: 'password',
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

  public emailAndPasswordLogin(): void {
    const result: FormResult | null = this.form.submit();
    if (result) {
      this.loginData.emit({ email: result.email, password: result.password });
    }
  }
}
