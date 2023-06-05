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
import { DistribuicoesService } from './distribuicoes.service';
import { CreateDistribuicoeDto } from './dto/create-distribuicoe.dto';
import { UpdateDistribuicoeDto } from './dto/update-distribuicoe.dto';

@Controller('distribuicoes')
export class DistribuicoesController {
  constructor(private readonly distribuicoesService: DistribuicoesService) {}

  @Post()
  create(@Body() createDistribuicoeDto: CreateDistribuicoeDto) {
    return this.distribuicoesService.create(createDistribuicoeDto);
  }

  @Get()
  findAll() {
    return this.distribuicoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.distribuicoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateDistribuicoeDto: UpdateDistribuicoeDto,
  ) {
    return this.distribuicoesService.update(+id, updateDistribuicoeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.distribuicoesService.remove(+id);
  }
}
