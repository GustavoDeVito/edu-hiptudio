import { Module } from '@nestjs/common';
import { LetrasService } from './letras.service';
import { LetrasController } from './letras.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LetrasController],
  providers: [LetrasService],
})
export class LetrasModule {}
