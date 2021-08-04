import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

const materialComponents = {
  MatProgressBarModule,
  MatRadioModule,
  MatCardModule,
  MatSliderModule,
};

@NgModule({
  imports: [
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    MatSliderModule,
  ],
  exports: [
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    MatSliderModule,
  ],
})
export class MaterialModule {}
