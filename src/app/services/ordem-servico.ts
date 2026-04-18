import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { Formulario, OrdemServicoRequest, PagedResponse } from '../model/ordem-de-servico';

@Injectable({
  providedIn: 'root',
})
export class OrdemServico {

  private readonly apiUrl = 'http://localhost:8080/api/registros';
  private readonly http = inject(HttpClient);
  private readonly atualizarLista = new BehaviorSubject<void>(undefined);
  readonly acaoAtualizarLista$ = this.atualizarLista.asObservable();

  getOrdemDeServicos(): Observable<PagedResponse<Formulario>> {
    return this.http.get<PagedResponse<Formulario>>(this.apiUrl);
  }

  salvarFormulario(dados: OrdemServicoRequest): Observable<Formulario> {
    return this.http.post<Formulario>(this.apiUrl, dados).pipe(
      tap(() => this.atualizarLista.next())
    );
  }

  atualizarFormulario(id: number, dados: Partial<Formulario>): Observable<Formulario> {
    return this.http.put<Formulario>(`${this.apiUrl}/${id}`, dados).pipe(
      tap(() => this.atualizarLista.next())
    );
  }

  concluirOrdem(id: number): Observable<Formulario> {
    return this.http.patch<Formulario>(`${this.apiUrl}/${id}`, {
      status: 'Concluída',
    }).pipe(
      tap(() => this.atualizarLista.next())
    );
  }

  excluirFormulario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.atualizarLista.next())
    );
  }

  recarregar(): void {
    this.atualizarLista.next();
  }

  get produtoAtualziado$(): Observable<PagedResponse<Formulario>> {
    return this.acaoAtualizarLista$.pipe(
      switchMap(() => this.getOrdemDeServicos()),
      shareReplay(1)
    );
  }

}