import { Component } from '@angular/core';
import { PageForm } from '../../component/page-form/page-form';
import { ListHistoricoPage } from '../../component/list-historico-pendentes/list-historico-page';

@Component({
  selector: 'app-atendimento',
  imports: [PageForm, ListHistoricoPage],
  templateUrl: './atendimento.html',
  styleUrl: './atendimento.css',
})
export class Atendimento {}
