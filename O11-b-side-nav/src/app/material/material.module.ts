import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialComponents = {
  MatSidenavModule,
};
@NgModule({
  imports: [MatSidenavModule],
  exports: [MatSidenavModule],
})
export class MaterialModule {}
