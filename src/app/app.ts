import { ChangeDetectionStrategy, Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ListHistoricoPage } from "./pages/home/list-historico-pendentes/list-historico-page";
import { PageForm } from "./pages/home/page-form/page-form";
import { HistoricoOrdemServico } from "./pages/home/historico-ordem-servico/historico-ordem-servico";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListHistoricoPage, PageForm, HistoricoOrdemServico, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-services');
}
