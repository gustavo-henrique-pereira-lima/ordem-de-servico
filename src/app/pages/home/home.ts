import { Component } from '@angular/core';
import { PageForm } from '../../component/page-form/page-form';
import { ListHistoricoPage } from '../../component/list-historico-pendentes/list-historico-page';
import { HistoricoOrdemServico } from '../../component/historico-ordem-servico/historico-ordem-servico';


@Component({
  selector: 'app-home',
  imports: [PageForm, ListHistoricoPage, HistoricoOrdemServico],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
