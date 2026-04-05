interface Formulario {
  id: number;
  nome: string;
  cpf: string;
  marca: string;
  modelo: string;
  defeito: string;
  valor: string;
  contato: string;
  observacao: string;
  status: 'Pendente' | 'Concluída';
  dataHora: Date;
  editando?: boolean; // Propriedade para controlar o modo de edição
}