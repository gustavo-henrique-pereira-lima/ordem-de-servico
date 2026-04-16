import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map, shareReplay, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class OrdemServico {

  private apiUrl  = 'http://localhost:8080/api/registros';

  private http = inject(HttpClient)



  getOrdemDeServicos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  private atualizarLista = new BehaviorSubject<void>(undefined);


  acaoAtualizarLista$ = this.atualizarLista.asObservable()

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

  get produtoAtualziado$(): Observable<any> {
    return this.acaoAtualizarLista$.pipe(
       switchMap(() => this.getOrdemDeServicos()),
       shareReplay(1)
    );
}

}