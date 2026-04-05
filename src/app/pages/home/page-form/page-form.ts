import { ChangeDetectionStrategy, Component, signal, computed, inject } from '@angular/core';
import { FormControl,  ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrdemServico } from '../../../services/ordem-servico';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-page-form',
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './page-form.html',
  styleUrl: './page-form.css',
})
export class PageForm {
    // Substitui o construtor para usar a injeção de dependência com o método `inject`
  //constructor(private ordemServico: OrdemServico){}
  private ordemServico = inject(OrdemServico);

  // Evoluímos a lista para ter um nome e um ícone do Material Icons


  formulario = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    defeito: new FormControl(''),
    valor: new FormControl(''),
    contato: new FormControl(''),
    observacao: new FormControl(''),
    status: new FormControl('Pendente'),
    dataHora: new FormControl(new Date()),
  });



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
    
    // Limpa o formulário após o envio
    this.formulario.reset(); 

    
  };


}
