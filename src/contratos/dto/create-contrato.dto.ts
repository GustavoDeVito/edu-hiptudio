import { IsDateString, IsNumber } from 'class-validator';

export class CreateContratoDto {
  @IsDateString()
  data_contrato: Date;

  @IsNumber()
  duracao_semestres: number;

  @IsNumber()
  fk_TipoContrato: number;

  @IsNumber()
  valor: number;

  @IsNumber()
  fk_Cliente: number;
}
