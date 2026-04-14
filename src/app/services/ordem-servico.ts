import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map, shareReplay, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class OrdemServico {
  // Linha base de dados json
  //private apiUrl  = 'http://localhost:3001/formularios';
  private apiUrl  = 'http://localhost:8080/api/registros';

  private http = inject(HttpClient) //Substitui o construtor, permitindo a injeção de dependências diretamente na propriedade da classe. Isso torna o código mais limpo e fácil de ler, eliminando a necessidade de um construtor explícito para injetar o HttpClient.

  private atualizarLista = new BehaviorSubject<void>(undefined);
  //É um tipo especial de Observable que guarda um valor e sempre o emite para novos inscritos. Ele serve como o seu "botão de atualizar".
  // Sempre que você quiser recarregar os dados do servidor, basta chamar this.atualizarLista.next(). Como ele começa com undefined, a busca de dados acontece automaticamente assim que o componente carrega.
  
  //GET BASE DE DADOS
  // BehaviorSubject guarda o estado atual e emite para quem estiver inscrito
  private formularios$ = this.atualizarLista.pipe(
    switchMap(() => this.http.get<Formulario[]>(this.apiUrl)),// switchMap é usado para transformar o valor emitido pelo refreshSubject em uma nova Observable que faz a requisição HTTP
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
      tap(() => this.atualizarLista.next()) // Apos salvar, atualiza
    );
  }

  atualizarFormulario(id: number, dados: any): Observable<Formulario> {
    return this.http.patch<Formulario>(`${this.apiUrl}/${id}`, dados).pipe(
      tap(() => this.atualizarLista.next()) // Apos atualizar, atualiza
    );
  }

  concluirOrdem(id: number): Observable<Formulario> {
    return this.http.patch<Formulario>(`${this.apiUrl}/${id}`, {
      status: 'Concluída' }).pipe(
      tap(() => this.atualizarLista.next()) // Apos concluir, atualiza
    );
  }

  excluirFormulario(id: number): Observable<Formulario> {
    return this.http.delete<Formulario>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.atualizarLista.next()) // Apos excluir, atualiza
    );
  }

  recarregar(): void {
    this.atualizarLista.next(); // Emite um valor para atualizar a lista
  }
}