import { distribuidora } from '@prisma/client';

export class Distribuidora implements distribuidora {
  ID_distribuidora: number;
  nome: string;
  plataforma: string;
}
