import { ChangeDetectionStrategy, Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ListHistoricoPage } from "./pages/home/list-historico-pendentes/list-historico-page";
import { PageForm } from "./pages/home/page-form/page-form";
import { HistoricoOrdemServico } from "./pages/home/historico-ordem-servico/historico-ordem-servico";
import { MiniMenu } from './component/mini-menu/mini-menu';
import { Menu } from './component/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListHistoricoPage, PageForm, HistoricoOrdemServico, MatIconModule, MiniMenu, Menu],
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
