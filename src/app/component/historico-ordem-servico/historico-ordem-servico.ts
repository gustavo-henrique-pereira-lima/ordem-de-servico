import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Formulario } from '../../model/ordem-de-servico';
import { OrdemServico } from '../../services/ordem-servico';

@Component({
  standalone: true,
  selector: 'app-historico-ordem-servico',
  imports: [CommonModule, MatIconModule],
  templateUrl: './historico-ordem-servico.html',
  styleUrl: './historico-ordem-servico.css',
})
export class HistoricoOrdemServico implements OnInit {
  private readonly dataService = inject(OrdemServico);
  readonly formularios: Formulario[] = [];

  ngOnInit(): void {
    this.dataService.produtoAtualziado$.subscribe((response) => {
      this.formularios.splice(0, this.formularios.length, ...response.content);
    });
  }
}
