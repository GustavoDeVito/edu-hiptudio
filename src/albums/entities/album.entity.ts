import { album } from '@prisma/client';

export class AlbumEntity implements album {
  ID_album: number;
  nome: string;
  capa: string;
  produtor: string;
  fk_TipoContrato: number;
  fk_Cliente: number;
}
