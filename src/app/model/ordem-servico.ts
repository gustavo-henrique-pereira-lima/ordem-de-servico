import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map, shareReplay, tap } from 'rxjs/operators';

interface Formulario {
  id: number;
  nome: string;
  cpf: string;
  dispositivo: string;
  defeito: string;
  valor: string;
  nTelefone: string;
  observacao: string;
  status: 'Pendente' | 'Concluída';
  dataHora: Date;    
}

@Injectable({
  providedIn: 'root',
})
export class OrdemServico {
  // Linha base de dados json
  private apiUrl  = 'http://localhost:3000/formularios';

  private http = inject(HttpClient) //Substitui o construtor

  //private refreshList = new BehaviorSubject<void>(undefined);
  private refreshSubject = new BehaviorSubject<void>(undefined);

  //GET BASE DE DADOS
  // BehaviorSubject guarda o estado atual e emite para quem estiver inscrito
  // switchMap é usado para transformar o valor emitido pelo refreshSubject em uma nova Observable que faz a requisição HTTP
  private formularios$ = this.refreshSubject.pipe(
    switchMap(() => this.http.get<Formulario[]>(this.apiUrl)),
    map(dados => [...dados].reverse()),
    shareReplay(1)
  )
  
  // Filtra os serviços pendentes e concluídos
  public servicosPendentes = this.formularios$.pipe(
    map(formularios => formularios.filter(formulario => formulario.status === 'Pendente'))
  );
  // Filtra os serviços pendentes e concluídos
  public servicosConcluidos = this.formularios$.pipe(
    map(formularios => formularios.filter(formulario => formulario.status === 'Concluída'))
  );

  // salva os dados do formulário no banco de dados
  salvarFormulario(dados: any): Observable<Formulario> {
    return this.http.post<Formulario>(this.apiUrl, dados).pipe(
      tap(() => this.refreshSubject.next()) // Apos salvar, atualiza
    );
  }

  concluirOrdem(id: number): Observable<Formulario> {
    return this.http.patch<Formulario>(`${this.apiUrl}/${id}`, {
      status: 'Concluída' }).pipe(
      tap(() => this.refreshSubject.next()) // Apos concluir, atualiza
    );
  }

  excluirFormulario(id: number): Observable<Formulario> {
    return this.http.delete<Formulario>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshSubject.next()) // Apos excluir, atualiza
    );
  }

  recarregar(): void {
    this.refreshSubject.next(); // Emite um valor para atualizar a lista
  }
}