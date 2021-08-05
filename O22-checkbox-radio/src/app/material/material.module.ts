import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [MatCheckboxModule, MatCardModule, MatRadioModule],
  exports: [MatCheckboxModule, MatCardModule, MatRadioModule],
})
export class MaterialModule {}
