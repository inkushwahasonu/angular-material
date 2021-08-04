import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponent = {
  MatListModule,
  MatIconModule,
};

@NgModule({
  imports: [MatListModule, MatIconModule],
  exports: [MatListModule, MatIconModule],
})
export class MaterialModule {}
