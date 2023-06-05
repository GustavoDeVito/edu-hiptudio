import { contrato } from '@prisma/client';

export class Contrato implements contrato {
  ID_contrato: number;
  data_contrato: Date;
  duracao_semestres: number;
  fk_TipoContrato: number;
  valor: number;
  fk_Cliente: number;
}
