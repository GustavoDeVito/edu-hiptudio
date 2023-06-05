import { PartialType } from '@nestjs/mapped-types';
import { CreateDistribuicoeDto } from './create-distribuicoe.dto';

export class UpdateDistribuicoeDto extends PartialType(CreateDistribuicoeDto) {}
