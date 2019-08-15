import { Component, Input } from '@angular/core';

import { FormField } from '../../interfaces';

@Component({
  selector: 'form-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() data: FormField;
}
