import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'O15-expansion-panel';

  // --------------------------------
  panelOpenState = false;

  // ------------------------------------
  // step = 0;

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }
}
