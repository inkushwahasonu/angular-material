import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
