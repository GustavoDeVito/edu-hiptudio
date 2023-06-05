import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDistribuidoraDto } from './dto/create-distribuidora.dto';
import { UpdateDistribuidoraDto } from './dto/update-distribuidora.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DistribuidorasService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDistribuidoraDto: CreateDistribuidoraDto) {
    return this.prismaService.distribuidora.create({
      data: createDistribuidoraDto,
    });
  }

  findAll() {
    return this.prismaService.distribuidora.findMany();
  }

  async findOne(id: number) {
    const distribuidora = await this.prismaService.distribuidora.findFirst({
      where: { ID_distribuidora: id },
    });

    if (!distribuidora) {
      throw new NotFoundException();
    }

    return distribuidora;
  }

  async update(id: number, updateDistribuidoraDto: UpdateDistribuidoraDto) {
    const exist = await this.prismaService.distribuidora.findFirst({
      where: { ID_distribuidora: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.distribuidora.update({
      where: { ID_distribuidora: id },
      data: updateDistribuidoraDto,
    });
  }

  async remove(id: number) {
    const exist = await this.prismaService.distribuidora.findFirst({
      where: { ID_distribuidora: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.distribuidora.delete({
      where: { ID_distribuidora: id },
    });
  }
}
