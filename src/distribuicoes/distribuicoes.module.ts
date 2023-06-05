import { Module } from '@nestjs/common';
import { DistribuicoesService } from './distribuicoes.service';
import { DistribuicoesController } from './distribuicoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DistribuicoesController],
  providers: [DistribuicoesService],
})
export class DistribuicoesModule {}
