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
  status: string;
  dataHora: Date;    
}

@Injectable({
  providedIn: 'root',
})
export class OrdemServico {
  // Linha base de dados json
  private apiUrl  = 'http://localhost:3000/formularios';

  // constructor(private http: HttpClient){
  //   this.listarFormularios()
  // }
  private http = inject(HttpClient) //Substitui o construtor

  //private refreshList = new BehaviorSubject<void>(undefined);
  private refreshSubject = new BehaviorSubject<void>(undefined);

  //GET BASE DE DADOS
  // BehaviorSubject guarda o estado atual e emite para quem estiver inscrito
  // private formulariosSubject = new BehaviorSubject<any[]>([]);
  // formularios$ = this.formulariosSubject.asObservable();
  formularios$ = this.refreshSubject.pipe(
    switchMap(() => this.http.get<Formulario[]>(this.apiUrl)),
    map(dados => [...dados].reverse()),
    shareReplay(1)
  )
  
  // salva os dados do formulário no banco de dados
  salvarFormulario(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados).pipe(
      tap(() => this.refreshSubject.next()) // Apos salvar, atualiza
    );
  }

  atualizarFormulario(id: number, dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dados).pipe(
      tap(() => this.refreshSubject.next()) // Apos atualizar, atualiza
    );
  }

  excluirFormulario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refreshSubject.next()) // Apos excluir, atualiza
    );
  }
  // READ
  // listarFormularios(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // listarFormularios(): void {
  //   this.http.get<Formulario[]>(this.apiUrl).subscribe(dados => {
  //     this.formulariosSubject.next(dados.reverse()); //lista o formulario de forma invertida
  //   })
  // }

  recarregar(): void {
    this.refreshSubject.next(); // Emite um valor para atualizar a lista
  }
}