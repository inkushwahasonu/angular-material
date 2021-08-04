import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
};
@NgModule({
  imports: [MatMenuModule, MatIconModule, MatButtonModule],
  exports: [MatMenuModule, MatIconModule, MatButtonModule],
})
export class MaterialModule {}
