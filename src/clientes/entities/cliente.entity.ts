import { cliente } from '@prisma/client';

export class Cliente implements cliente {
  ID_cliente: number;
  telefone: string;
  email: string;
  senha: string;
  nome: string;
  genero_musical: string;
}
