import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Atendimento } from './pages/atendimento/atendimento';
import { ListaDeDevedores } from './component/lista-de-devedores/lista-de-devedores';
import { HistoricoOrdemServico } from './component/historico-ordem-servico/historico-ordem-servico';

export const routes: Routes = [
  { path: '', redirectTo: 'atendimento', pathMatch: 'full' },
  { path: '**', redirectTo: 'atendimento', pathMatch: 'full' },
  { path: 'atendimento', component: Atendimento },
  { path: 'home', component: Home },
  { path: 'devedores', component: ListaDeDevedores },
  { path: 'historico', component: HistoricoOrdemServico },
];
