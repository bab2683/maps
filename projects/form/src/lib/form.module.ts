import { NgModule } from '@angular/core';
import { ComposerComponent, RowComponent } from './components';

@NgModule({
  declarations: [ComposerComponent, RowComponent],
  imports: [],
  exports: [ComposerComponent]
})
export class FormModule {}
