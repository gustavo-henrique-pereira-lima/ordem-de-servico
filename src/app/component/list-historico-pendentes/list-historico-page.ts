import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { OrdemServico } from '../../services/ordem-servico';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-list-historico-page',
  imports: [AsyncPipe, MatIconModule, FormsModule],
  templateUrl: './list-historico-page.html',
  styleUrl: './list-historico-page.css',
})
export class ListHistoricoPage implements OnInit {
  

  private dataService = inject(OrdemServico);
  lista$: Observable<any[]> = new Observable();

  // Ao iniciar o componente, inscreve-se para receber atualizações dos formulários e carrega os dados iniciais
  ngOnInit(): void {
    this.lista$ = this.dataService.produtoAtualziado$.pipe(
      map((dados: any) => dados.content)
    );
  }

  onConcluir(id: number): void {
    this.dataService.concluirOrdem(id).subscribe(() => {
      // A atualização da lista é feita automaticamente pelo BehaviorSubject
    });
  }

  onExcluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este formulário?')) {
      this.dataService.excluirFormulario(id).subscribe(() => {
        // A atualização da lista é feita automaticamente pelo BehaviorSubject
      });
    }
  }

  // setor de edição
  editando = signal(false);

  toggleEdit(ordem: any): void {
    ordem.editando = !ordem.editando;
  }

  salvarEdicao(ordem: any): void {
    const { editando, ...dadosParaSalvar } = ordem; // Remove a propriedade editando
    this.dataService.atualizarFormulario(ordem.id, dadosParaSalvar).subscribe(() => {
      ordem.editando = false;
      console.log('Dados editados salvos:', dadosParaSalvar);
    });
  }

}
