import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, /*FormControl*/ FormGroup /*Validators*/ } from '@angular/forms';

import { FormField, FormResult, FormRow, ParsedData } from '../../interfaces';

@Component({
  selector: 'bab-form',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {
  public formFields: FormField[];
  public formRows: FormRow[];
  public formGroup: FormGroup;

  @Input()
  public rows: FormRow[];

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    if (this.isDataValid()) {
      this.formRows = [...this.rows];
      this.initForm(this.parseData(this.formRows));
    }
  }

  public submit(): FormResult | null {
    if (this.formGroup.valid) {
      return this.formGroup.value;
    }
    return null;
  }

  private isDataValid(): boolean {
    return true;
  }

  private parseData(rows: FormRow[]): ParsedData {
    this.formFields = rows.reduce((fields, current) => {
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
