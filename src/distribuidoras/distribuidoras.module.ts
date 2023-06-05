import { Module } from '@nestjs/common';
import { DistribuidorasService } from './distribuidoras.service';
import { DistribuidorasController } from './distribuidoras.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DistribuidorasController],
  providers: [DistribuidorasService],
})
export class DistribuidorasModule {}
