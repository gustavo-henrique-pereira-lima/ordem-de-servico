import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  readonly activeItem = signal('Início');
}
