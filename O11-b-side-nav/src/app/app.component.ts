import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'O11-b-side-nav';

  opened = false;

  // print sidenav is opened or closed
  log(state: any) {
    console.log(state);
  }
}
