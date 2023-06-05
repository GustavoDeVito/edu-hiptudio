import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLetraDto } from './dto/create-letra.dto';
import { UpdateLetraDto } from './dto/update-letra.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LetrasService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createLetraDto: CreateLetraDto) {
    return this.prismaService.letra.create({
      data: createLetraDto,
    });
  }

  findAll() {
    return this.prismaService.letra.findMany();
  }

  async findOne(id: number) {
    const letra = await this.prismaService.letra.findFirst({
      where: { ID_letra: id },
    });

    if (!letra) {
      throw new NotFoundException();
    }

    return letra;
  }

  async update(id: number, updateLetraDto: UpdateLetraDto) {
    const exist = await this.prismaService.letra.findFirst({
      where: { ID_letra: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.letra.update({
      where: { ID_letra: id },
      data: updateLetraDto,
    });
  }

  async remove(id: number) {
    const exist = await this.prismaService.letra.findFirst({
      where: { ID_letra: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.letra.delete({
      where: { ID_letra: id },
    });
  }
}
