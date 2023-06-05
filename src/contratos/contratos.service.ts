import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContratosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createContratoDto: CreateContratoDto) {
    const fkCliente = await this.prismaService.cliente.findFirst({
      where: { ID_cliente: createContratoDto.fk_Cliente },
    });

    if (!fkCliente) {
      throw new BadRequestException('Cliente não encontrado');
    }

    const fkTipoContrato = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: createContratoDto.fk_TipoContrato },
    });

    if (!fkTipoContrato) {
      throw new BadRequestException('Tipo de contrato não encontrado');
    }

    return this.prismaService.contrato.create({ data: createContratoDto });
  }

  findAll() {
    return this.prismaService.contrato.findMany();
  }

  async findOne(id: number) {
    const contrato = await this.prismaService.contrato.findFirst({
      where: { ID_contrato: id },
    });

    if (!contrato) {
      throw new NotFoundException();
    }

    return contrato;
  }

  async update(id: number, updateContratoDto: UpdateContratoDto) {
    const exist = await this.prismaService.contrato.findFirst({
      where: { ID_contrato: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    const fkCliente = await this.prismaService.cliente.findFirst({
      where: { ID_cliente: updateContratoDto.fk_Cliente },
    });

    if (!fkCliente) {
      throw new BadRequestException('Cliente não encontrado');
    }

    const fkTipoContrato = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: updateContratoDto.fk_TipoContrato },
    });

    if (!fkTipoContrato) {
      throw new BadRequestException('Tipo de contrato não encontrado');
    }

    return this.prismaService.contrato.update({
      where: { ID_contrato: id },
      data: updateContratoDto,
    });
  }

  async remove(id: number) {
    const exist = await this.prismaService.contrato.findFirst({
      where: { ID_contrato: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.contrato.delete({ where: { ID_contrato: id } });
  }
}
