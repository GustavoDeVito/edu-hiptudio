import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AlbumsModule } from './albums/albums.module';
import { ClientesModule } from './clientes/clientes.module';
import { ContratosModule } from './contratos/contratos.module';
import { DistribuicoesModule } from './distribuicoes/distribuicoes.module';
import { DistribuidorasModule } from './distribuidoras/distribuidoras.module';
import { LetrasModule } from './letras/letras.module';

@Module({
  imports: [PrismaModule, AlbumsModule, ClientesModule, ContratosModule, DistribuicoesModule, DistribuidorasModule, LetrasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
