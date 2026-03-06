import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListHistoricoPage } from "./components/list-historico-page/list-historico-page";
import { PageForm } from "./components/page-form/page-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListHistoricoPage, PageForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-services');
}
