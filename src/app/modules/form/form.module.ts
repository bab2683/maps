import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComposerComponent, RowComponent } from './components';

@NgModule({
  declarations: [ComposerComponent, RowComponent],
  exports: [ComposerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class FormModule {}
