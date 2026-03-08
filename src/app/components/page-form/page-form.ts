import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { OrdemServico } from '../../model/ordem-servico';


@Component({
  selector: 'app-page-form',
  imports: [ReactiveFormsModule],
  templateUrl: './page-form.html',
  styleUrl: './page-form.css',
})
export class PageForm {
    // Substitui o construtor para usar a injeção de dependência com o método `inject`
  //constructor(private ordemServico: OrdemServico){}
  private ordemServico = inject(OrdemServico);

  formulario = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dispositivo: new FormControl(''),
    defeito: new FormControl(''),
    valor: new FormControl(''),
    nTelefone: new FormControl(''),
    observacao: new FormControl(''),
    status: new FormControl('Pendente'),
    dataHora: new FormControl(new Date()),
  })



  onSubmit(): void {
    if (this.formulario.valid) {
      const dataBruta = new Date(); // Obtém a data e hora atual
      const dataCorrigida = new Date(dataBruta.getTime() - dataBruta.getTimezoneOffset() * 60000); // Ajusta para o fuso horário local
      this.formulario.patchValue({ dataHora: dataCorrigida }); // Atualiza o campo dataHora com a data corrigida para o meu objeto

      // Envia os dados do formulário para o serviço
      this.ordemServico.salvarFormulario(this.formulario.value).subscribe({ 
        next: (res) => console.log('Dados enviados e salvos:', res),
        error: (err) => console.error('Erro ao salvar:', err),
      });
    }
    
    // this.ordemServico.salvarFormulario(this.formulario.value).subscribe({
    //   next: (res) => console.log('Dados enviados e salvos:', res),
    //   error: (err) => console.error('Erro ao salvar:', err),
    // });
    // this.ordemServico.salvarFormulario(this.formulario.value)

    
  };


}
