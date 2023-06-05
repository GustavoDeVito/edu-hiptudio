import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DistribuidorasService } from './distribuidoras.service';
import { CreateDistribuidoraDto } from './dto/create-distribuidora.dto';
import { UpdateDistribuidoraDto } from './dto/update-distribuidora.dto';

@Controller('distribuidoras')
export class DistribuidorasController {
  constructor(private readonly distribuidorasService: DistribuidorasService) {}

  @Post()
  create(@Body() createDistribuidoraDto: CreateDistribuidoraDto) {
    return this.distribuidorasService.create(createDistribuidoraDto);
  }

  @Get()
  findAll() {
    return this.distribuidorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.distribuidorasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateDistribuidoraDto: UpdateDistribuidoraDto,
  ) {
    return this.distribuidorasService.update(+id, updateDistribuidoraDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.distribuidorasService.remove(+id);
  }
}
