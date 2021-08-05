import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
  exports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
