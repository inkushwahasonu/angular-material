import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'O6-badge';

  notice = 0;
  notifications = false;

  toggleBadgeVisibility() {
    this.notifications = !this.notifications;
  }
}
