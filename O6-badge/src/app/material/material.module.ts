import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = {
  MatBadgeModule,
  MatIconModule,
  MatButtonModule,
};

@NgModule({
  imports: [MatBadgeModule, MatIconModule, MatButtonModule],
  exports: [MatBadgeModule, MatIconModule, MatButtonModule],
})
export class MaterialModule {}
