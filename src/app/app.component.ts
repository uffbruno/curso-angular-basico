import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uffbruno::Lista de Heróis';

  navItems: { path: string; text: string }[] = [
    { path: '/dashboard', text: 'Dashboard'},
    { path: '/heroes', text: 'Heróis' }
  ]

  constructor() {
    const token = localStorage.getItem('token');

    if (!token) {
      const randomToken = Math.random().toString(36).substring(-10);
      localStorage.setItem('token', randomToken);
    }
  }
}
