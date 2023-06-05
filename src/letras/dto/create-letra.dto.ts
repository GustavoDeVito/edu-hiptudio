import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLetraDto {
  @IsNotEmpty()
  @IsString()
  conteudo: string;

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNumber()
  fk_TipoContrato: number;

  @IsNumber()
  fk_Cliente: number;
}
