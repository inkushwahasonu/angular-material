import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatStepperModule, MatFormFieldModule, MatButtonModule],
  exports: [MatStepperModule, MatFormFieldModule, MatButtonModule],
})
export class MaterialModule {}
