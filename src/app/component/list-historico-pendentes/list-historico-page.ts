import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { OrdemServico } from '../../services/ordem-servico';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-historico-page',
  imports: [AsyncPipe, MatIconModule, FormsModule],
  templateUrl: './list-historico-page.html',
  styleUrl: './list-historico-page.css',
})
export class ListHistoricoPage implements OnInit {
  
  private ordemServico = inject(OrdemServico); 

  public formularios: any[] = [];

  // Ao iniciar o componente, inscreve-se para receber atualizações dos formulários e carrega os dados iniciais
  ngOnInit(): void {
    // this.ordemServico.formularios$.subscribe(dados => {
    //   this.formularios = dados;
    // })
    //   // Inscreve-se para receber atualizações
    // this.ordemServico.formularios$.subscribe(dados => {
    //  this.formularios = dados;
    // });
    // // Carrega os dados logo ao iniciar
    // this.ordemServico.recarregar();
  }

  onConcluir(id: number): void {
    this.ordemServico.concluirOrdem(id).subscribe(() => {
      // A atualização da lista é feita automaticamente pelo BehaviorSubject
    });
  }

  onExcluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este formulário?')) {
      this.ordemServico.excluirFormulario(id).subscribe(() => {
        // A atualização da lista é feita automaticamente pelo BehaviorSubject
      });
    }
  }

  // O "$" é uma convenção para indicar que é um Observable
  public servicosPendentes$ = this.ordemServico.servicosPendentes;

  // setor de edição
  editando = signal(false);

  
  toggleEdit(ordem: any): void {
    ordem.editando = !ordem.editando;
  }

  salvarEdicao(ordem: any): void {
    const { editando, ...dadosParaSalvar } = ordem; // Remove a propriedade editando
    this.ordemServico.atualizarFormulario(ordem.id, dadosParaSalvar).subscribe(() => {
      ordem.editando = false;
      console.log('Dados editados salvos:', dadosParaSalvar);
    });
  }
}
