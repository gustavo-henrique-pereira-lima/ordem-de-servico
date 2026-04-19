export interface Formulario {
  id: number;
  nome: string;
  cpf: string;
  marca: string;
  modelo: string;
  defeito: string;
  cor: string;
  nSerieOuImei: string;
  valor: number;
  contato: string;
  observacao: string;
  status: 'Pendente' | 'Concluída';
  editando?: boolean;
}

export interface PagedResponse<T> {
  content: T[];
  totalElements?: number;
  totalPages?: number;
}

export interface OrdemServicoRequest {
  nome: string;
  cpf: string;
  marca: string;
  modelo: string;
  defeito: string;
  cor: string;
  contato: string;
  observacao: string;
  valor: number;
  imei_nserie: string;
  statusText: Formulario['status'];
  dataHora: Date;
}

export interface FiltrosRegistro {
  page: number;
  size: number;
  dataReferencia?: Date;
  todos: boolean;
  pendentes: boolean;
  concluidos: boolean;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface RegistroResponseDTO {
  id: number;
  // TODO: Adicionar mapeamento dos DTOs de Ordem de Serviço
}
