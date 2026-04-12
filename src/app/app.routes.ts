import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Atendimento } from './pages/atendimento/atendimento';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'atendimento', component: Atendimento}
    
];
