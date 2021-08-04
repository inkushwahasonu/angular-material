import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'O7-progress-bar';

  color: any = 'primary';
  mode: any = 'determinate';
  value = 50;
  bufferValue = 75;
}
