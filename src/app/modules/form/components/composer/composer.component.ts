import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, /*FormControl*/ FormGroup /*Validators*/ } from '@angular/forms';

import { FormComposer, FormField, ParsedData } from '../../interfaces';

@Component({
  selector: 'bab-form',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {
  @Input()
  public form: FormComposer;

  public formFields: FormField[];
  public formGroup: FormGroup;
  public formSubmitText: string;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    if (this.isDataValid()) {
      this.formSubmitText = this.form.submitText;
      this.initForm(this.parseData(this.form));
    }
  }

  public submit(): void {
    console.log('submited');
  }

  private isDataValid(): boolean {
    return true;
  }

  private parseData(form: FormComposer): ParsedData {
    this.formFields = form.rows.reduce((fields, current) => {
      fields = [...fields, ...current.fields];
      return fields;
    }, []);

    return this.formFields.reduce<ParsedData>((parsedData, current) => {
      parsedData[current.name] = [
        current.default !== undefined ? current.default : null,
        current.validators ? current.validators : []
      ];
      return parsedData;
    }, {});
  }

  private initForm(parsedData: ParsedData): void {
    this.formGroup = this.fb.group(parsedData);
    console.log(this.formGroup);
  }
}
