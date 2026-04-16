import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrdemServico } from '../../services/ordem-servico';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-page-form',
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './page-form.html',
  styleUrl: './page-form.css',
})
export class PageForm {
  private ordemServico = inject(OrdemServico);

  formulario = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    defeito: new FormControl(''),
    cor: new FormControl(''),
    nSerieOuImei: new FormControl(''),
    valor: new FormControl(''),
    contato: new FormControl(''),
    observacao: new FormControl(''),
    status: new FormControl('Pendente'),
    dataHora: new FormControl(new Date()),
  });


  onSubmit(): void {
    if (this.formulario.valid) {
      const formValue = this.formulario.value;
      const payload = {
        nome: formValue.nome,
        cpf: formValue.cpf,
        marca: formValue.marca,
        modelo: formValue.modelo,
        defeito: formValue.defeito,
        cor: formValue.cor,
        imei_nserie: formValue.nSerieOuImei,
        valor: Number(formValue.valor), // se o backend quer número
        contato: formValue.contato,
        observacao: formValue.observacao,
        statusText: formValue.status,
      };

      // Envia os dados do formulário para o serviço
      this.ordemServico.salvarFormulario(payload).subscribe({ 
        next: (res) => {
          console.log('Dados enviados e salvos:', res);
          this.ordemServico.recarregar();
          this.formulario.reset(); 
        },

        error: (err) => console.error('Erro ao salvar:', err),
      });

      
      // Limpa o formulário após o envio
      

    }


    
  };


}
