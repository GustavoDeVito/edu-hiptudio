import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDistribuidoraDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  plataforma: string;
}
