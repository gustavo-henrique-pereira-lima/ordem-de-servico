import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  activeItem = signal('Início');
}
