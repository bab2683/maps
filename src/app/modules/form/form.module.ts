import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComposerComponent, FieldComponent, RowComponent } from './components';

@NgModule({
  declarations: [ComposerComponent, FieldComponent, RowComponent],
  exports: [ComposerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class FormModule {}
