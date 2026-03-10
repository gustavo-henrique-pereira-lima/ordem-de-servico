import { ChangeDetectionStrategy, Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ListHistoricoPage } from "./components/list-historico-page/list-historico-page";
import { PageForm } from "./components/page-form/page-form";
import { HistoricoOrdemServico } from "./components/historico-ordem-servico/historico-ordem-servico";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListHistoricoPage, PageForm, HistoricoOrdemServico, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-services');
}
