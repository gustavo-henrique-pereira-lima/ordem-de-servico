import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from './component/menu/menu';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [ MatIconModule, Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-services');

  // exibir é um sinal booleano que controla a visibilidade do componente menu
  exibir: boolean = false; // Define se o componente começa visível ou não
  toggleMenu() {
    this.exibir = !this.exibir; // Inverte o valor (true vira false e vice-versa)
  }
}
