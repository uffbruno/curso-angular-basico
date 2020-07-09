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
}
