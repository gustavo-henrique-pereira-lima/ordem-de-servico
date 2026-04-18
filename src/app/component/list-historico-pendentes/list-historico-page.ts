import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable } from 'rxjs';
import { Formulario } from '../../model/ordem-de-servico';
import { OrdemServico } from '../../services/ordem-servico';

@Component({
  standalone: true,
  selector: 'app-list-historico-page',
  imports: [AsyncPipe, CommonModule, MatIconModule, FormsModule],
  templateUrl: './list-historico-page.html',
  styleUrl: './list-historico-page.css',
})
export class ListHistoricoPage implements OnInit {
  private readonly dataService = inject(OrdemServico);
  readonly lista$: Observable<Formulario[]> = this.dataService.produtoAtualziado$.pipe(
    map((dados) => dados.content)
  );

  editando = signal(false);

  ngOnInit(): void {
    // O observable lista$ já é inicializado antes do template ser renderizado.
  }

  onConcluir(id: number): void {
    this.dataService.concluirOrdem(id).subscribe();
  }

  onExcluir(id: number): void {
    if (typeof window === 'undefined' || !window.confirm('Tem certeza que deseja excluir este formulário?')) {
      return;
    }

    this.dataService.excluirFormulario(id).subscribe();
  }

  toggleEdit(ordem: Formulario): void {
    ordem.editando = !ordem.editando;
  }

  salvarEdicao(ordem: Formulario): void {
    const { editando, ...dadosParaSalvar } = ordem;
    this.dataService.atualizarFormulario(ordem.id, dadosParaSalvar).subscribe(() => {
      ordem.editando = false;
    });
  }
}
