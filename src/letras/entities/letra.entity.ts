import { letra } from '@prisma/client';

export class Letra implements letra {
  ID_letra: number;
  conteudo: string;
  titulo: string;
  fk_TipoContrato: number;
  fk_Cliente: number;
}
