import { distribuicao } from '@prisma/client';

export class Distribuicao implements distribuicao {
  ID_Distribuicao: number;
  fk_distribuidora: number;
  fk_tipoContrato: number;
}
