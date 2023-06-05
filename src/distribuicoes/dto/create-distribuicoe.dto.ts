import { IsNumber } from 'class-validator';

export class CreateDistribuicoeDto {
  @IsNumber()
  fk_distribuidora: number;

  @IsNumber()
  fk_tipoContrato: number;
}
