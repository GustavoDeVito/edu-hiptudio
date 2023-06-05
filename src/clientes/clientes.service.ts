import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = await this.prismaService.cliente.findFirst({
      where: { nome: createClienteDto.nome },
    });

    if (cliente) {
      throw new BadRequestException('Cliente já existe!');
    }

    return this.prismaService.cliente.create({ data: createClienteDto });
  }

  findAll() {
    return this.prismaService.cliente.findMany();
  }

  async findOne(id: number) {
    const cliente = await this.prismaService.cliente.findFirst({
      where: { ID_cliente: id },
    });

    if (!cliente) {
      throw new NotFoundException();
    }

    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const exist = await this.prismaService.cliente.findFirst({
      where: { ID_cliente: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.cliente.update({
      where: { ID_cliente: id },
      data: updateClienteDto,
    });
  }

  async remove(id: number) {
    const exist = await this.prismaService.cliente.findFirst({
      where: { ID_cliente: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.cliente.delete({ where: { ID_cliente: id } });
  }
}
