import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAlbumDto: CreateAlbumDto) {
    const album = await this.prismaService.album.findFirst({
      where: { nome: createAlbumDto.nome },
    });

    if (album) {
      throw new BadRequestException('Album já existe!');
    }

    const fkTipoContrato = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: createAlbumDto.fk_TipoContrato },
    });

    if (!fkTipoContrato) {
      throw new BadRequestException('Tipo de Contrato não encontrado');
    }

    const fkCliente = await this.prismaService.cliente.findFirst({
      where: { ID_cliente: createAlbumDto.fk_Cliente },
    });

    if (!fkCliente) {
      throw new BadRequestException('Cliente não encontrado');
    }

    return this.prismaService.album.create({ data: createAlbumDto });
  }

  findAll() {
    return this.prismaService.album.findMany();
  }

  async findOne(id: number) {
    const album = await this.prismaService.album.findFirst({
      where: { ID_album: id },
    });

    if (!album) {
      throw new NotFoundException();
    }

    return album;
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto) {
    const exist = await this.prismaService.album.findFirst({
      where: { ID_album: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    const album = await this.prismaService.album.findFirst({
      where: { nome: updateAlbumDto.nome },
    });

    if (album) {
      throw new BadRequestException('Album já existe!');
    }

    const fkTipoContrato = await this.prismaService.tipocontrato.findFirst({
      where: { ID_tipoContrato: updateAlbumDto.fk_TipoContrato },
    });

    if (!fkTipoContrato) {
      throw new BadRequestException('Tipo de Contrato não encontrado');
    }

    const fkCliente = await this.prismaService.cliente.findFirst({
      where: { ID_cliente: updateAlbumDto.fk_Cliente },
    });

    if (!fkCliente) {
      throw new BadRequestException('Cliente não encontrado');
    }

    return this.prismaService.album.update({
      where: { ID_album: id },
      data: updateAlbumDto,
    });
  }

  async remove(id: number) {
    const exist = await this.prismaService.album.findFirst({
      where: { ID_album: id },
    });

    if (!exist) {
      throw new NotFoundException();
    }

    return this.prismaService.album.delete({ where: { ID_album: id } });
  }
}
