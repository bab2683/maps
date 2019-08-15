import { Component, Input, OnInit } from '@angular/core';

import { FormRow } from '../../interfaces';

@Component({
  selector: 'form-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() data: FormRow;
  constructor() {}

  classes: string[];

  public ngOnInit(): void {
    this.classes = this.createClasses(this.data);
  }

  public createClasses(data: FormRow): string[] {
    const { fields, sizes } = data;
    if (sizes) {
      return Object.entries(sizes).reduce((result, current) => {
        result.push(`row--${current[0]}${current[1]}`);
        return result;
      }, []);
    }
    return [`row--b${fields.length}`];
  }
}
