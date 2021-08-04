import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
const MaterialComponent = {
  MatGridListModule,
};
@NgModule({
  imports: [MatGridListModule],
  exports: [MatGridListModule],
})
export class MaterialModule {}
