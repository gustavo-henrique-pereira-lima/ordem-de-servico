interface Formulario {
  id: number;
  nome: string;
  cpf: string;
  marca: string;
  modelo: string;
  defeito: string;
  cor: string;
  nSerieOuImei: string;
  valor: string;
  contato: string;
  observacao: string;
  status: 'Pendente' | 'Concluída';
  editando?: boolean; // Propriedade para controlar o modo de edição
}