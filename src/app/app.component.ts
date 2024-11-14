import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  imports: [Navbar],
})
export class AppComponent {
  title = 'todo';
}
