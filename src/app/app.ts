import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagIncial } from './components/pag-incial/pag-incial';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PagIncial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-services');
}
