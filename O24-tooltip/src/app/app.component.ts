import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'O24-tooltip';

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  // -----------------------------------------------------

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  // ----------------------------------------------------

  disabled = new FormControl(false);
}
