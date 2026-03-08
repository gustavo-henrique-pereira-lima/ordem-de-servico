import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListHistoricoPage } from "./components/list-historico-page/list-historico-page";
import { PageForm } from "./components/page-form/page-form";
import { HistoricoOrdemServico } from "./components/historico-ordem-servico/historico-ordem-servico";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListHistoricoPage, PageForm, HistoricoOrdemServico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-services');
}
