import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './entities/tarefas.entity';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefaService: TarefasService) {}

  @Get()
  async getTarefas(): Promise<Tarefa[]> {
    return await this.tarefaService.findAll();
  }

  @Get(':id')
  async getTarefasId(@Param('id') id: string): Promise<Tarefa | undefined> {
    return await this.tarefaService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createTarefa(@Body() body: Tarefa): Promise<Tarefa> {
    return await this.tarefaService.create(body);
  }

  @Patch(':id')
  async updateTarefa(
    @Param('id') id: string,
    @Body() body: Partial<Tarefa>,
  ): Promise<Tarefa> {
    return await this.tarefaService.updateTarefa(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTarefa(@Param('id') id: string): Promise<void> {
    await this.tarefaService.deleteTarefa(id);
  }
}
