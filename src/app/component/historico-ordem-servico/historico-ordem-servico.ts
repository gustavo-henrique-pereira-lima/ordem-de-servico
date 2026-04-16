import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { OrdemServico } from '../../services/ordem-servico';

@Component({
  selector: 'app-historico-ordem-servico',
  imports: [CommonModule, MatIconModule],
  templateUrl: './historico-ordem-servico.html',
  styleUrl: './historico-ordem-servico.css',
})
export class HistoricoOrdemServico {
  
  private ordemServico = inject(OrdemServico);

  public formularios: any[] = [];


  dataService = inject(OrdemServico);
  config: any[] = [];

// Ao iniciar o componente, inscreve-se para receber atualizações dos formulários e carrega os dados iniciais
  ngOnInit(): void {

  }

}
