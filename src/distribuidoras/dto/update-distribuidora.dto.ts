import { PartialType } from '@nestjs/mapped-types';
import { CreateDistribuidoraDto } from './create-distribuidora.dto';

export class UpdateDistribuidoraDto extends PartialType(
  CreateDistribuidoraDto,
) {}
