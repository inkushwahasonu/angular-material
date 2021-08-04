import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
const materialComponents = {
  MatProgressSpinnerModule,
  MatCardModule,
  MatRadioModule,
};

@NgModule({
  imports: [MatProgressSpinnerModule, MatCardModule, MatRadioModule],
  exports: [MatProgressSpinnerModule, MatCardModule, MatRadioModule],
})
export class MaterialModule {}
