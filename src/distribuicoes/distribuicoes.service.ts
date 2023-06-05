import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDistribuicoeDto } from './dto/create-distribuicoe.dto';
import { UpdateDistribuicoeDto } from './dto/update-distribuicoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DistribuicoesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDistribuicoeDto: CreateDistribuicoeDto) {
    const fkDistribuidora = await this.prismaService.distribuidora.findFirst({
      where: { ID_distribuidora: createDistribuicoeDto.fk_distribuidora },
    });

    if (!fkDistribuidora) {
      throw new BadRequestException('Distribuidora não encontrado');
    }

    const fkTipoContrato = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: createDistribuicoeDto.fk_tipoContrato },
    });

    if (!fkTipoContrato) {
      throw new BadRequestException('Tipo de contrato não encontrado');
    }

    return this.prismaService.distribuicao.create({
      data: createDistribuicoeDto,
    });
  }

  findAll() {
    return this.prismaService.distribuicao.findMany();
  }

  async findOne(id: number) {
    const distribuicao = await this.prismaService.distribuicao.findFirst({
      where: { ID_Distribuicao: id },
    });

    if (!distribuicao) {
      throw new NotFoundException();
    }

    return distribuicao;
  }

  async update(id: number, updateDistribuicoeDto: UpdateDistribuicoeDto) {
    const exist = await this.prismaService.distribuicao.findFirst({
      where: { ID_Distribuicao: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    const fkDistribuidora = await this.prismaService.distribuidora.findFirst({
      where: { ID_distribuidora: updateDistribuicoeDto.fk_distribuidora },
    });

    if (!fkDistribuidora) {
      throw new BadRequestException('Distribuidora não encontrado');
    }

    const fkTipoContrato = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: updateDistribuicoeDto.fk_tipoContrato },
    });

    if (!fkTipoContrato) {
      throw new BadRequestException('Tipo de contrato não encontrado');
    }

    return this.prismaService.distribuicao.update({
      where: { ID_Distribuicao: id },
      data: updateDistribuicoeDto,
    });
  }

  async remove(id: number) {
    const exist = await this.prismaService.distribuicao.findFirst({
      where: { ID_Distribuicao: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.distribuicao.delete({
      where: { ID_Distribuicao: id },
    });
  }
}
