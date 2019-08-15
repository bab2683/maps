import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComposerComponent, FieldComponent, InputComponent } from './components';

@NgModule({
  declarations: [ComposerComponent, InputComponent, FieldComponent],
  exports: [ComposerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class FormModule {}
