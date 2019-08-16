import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, Validators } from '@angular/forms';

import { ComposerComponent, FormResult, FormRow } from '@mod/form';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: false }) public form: ComposerComponent;
  rows: FormRow[];

  constructor(private auth: AuthService) {
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

  public ngOnInit(): void {}

  public login(): void {
    const result: FormResult | null = this.form.submit();
    if (result) {
      this.auth.login(result.email, result.password);
    }
  }
}
