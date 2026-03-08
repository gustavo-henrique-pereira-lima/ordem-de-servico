import { Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { OrdemServico } from '../../model/ordem-servico';

@Component({
  selector: 'app-list-historico-page',
  imports: [AsyncPipe, DatePipe ],
  templateUrl: './list-historico-page.html',
  styleUrl: './list-historico-page.css',
})
export class ListHistoricoPage implements OnInit {
    formularios: any[] = [];

  //constructor(public ordemServico: OrdemServico) {}
  constructor(public ordemServico: OrdemServico) {}

  ngOnInit(): void {

    this.ordemServico.formularios$.subscribe(dados => {
      this.formularios = dados;
    })

      // Inscreve-se para receber atualizações
    this.ordemServico.formularios$.subscribe(dados => {
     this.formularios = dados;
    });

    // Carrega os dados logo ao iniciar
    this.ordemServico.recarregar();
  }

  onExcluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este formulário?')) {
      this.ordemServico.excluirFormulario(id).subscribe(() => {
        // A atualização da lista é feita automaticamente pelo BehaviorSubject
      });
    }
  }

  


}
