import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
// import { AppComponent } from './app.component';
const materialComponents = [MatSlideToggleModule, MatButtonModule];
@NgModule({
  // declarations: [AppComponent],
  imports: [CommonModule, materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
