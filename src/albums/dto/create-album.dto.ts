import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  capa: string;

  @IsNotEmpty()
  @IsString()
  produtor: string;

  @IsNumber()
  fk_TipoContrato: number;

  @IsNumber()
  fk_Cliente: number;
}
