import { Injectable, NotFoundException } from '@nestjs/common';
import { Tarefa } from './entities/tarefas.entity';
import { CreateTarefaDto } from './dtos/create-tarefa.dto';
import { UpdateTarefaDto } from './dtos/update-tarefa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TarefasService {
  constructor(private readonly prisma: PrismaService) {}
  private tarefas: Tarefa[] = [];

  async findAll(): Promise<Tarefa[]> {
    const allTarefas = await this.prisma.tarefa.findMany();
    return allTarefas;
  }

  async findOne(id: string): Promise<Tarefa | undefined> {
    const tarefa = await this.prisma.tarefa.findFirst({
      where: {
        id: id,
      },
    });
    if (tarefa?.name) return tarefa;
    throw new NotFoundException('Tarefa não encontrada!');
  }

  async create(createTarefaDto: CreateTarefaDto): Promise<Tarefa> {
    const novaTarefa = await this.prisma.tarefa.create({
      data: {
        name: createTarefaDto.name,
        description: createTarefaDto.description,
        isCompleted: false,
      },
    });
    return novaTarefa;
  }

  async updateTarefa(
    id: string,
    updateTarefaDto: Omit<Partial<UpdateTarefaDto>, 'id'>,
  ): Promise<Tarefa> {
    const findTarefa = await this.findOne(id);
    if (!findTarefa) {
      throw new NotFoundException('Tarefa não econtrada!');
    }
    const tarefaAtualizada = await this.prisma.tarefa.update({
      where: { id: findTarefa.id },
      data: updateTarefaDto,
    });

    return tarefaAtualizada;
  }

  async deleteTarefa(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const tarefaIndex = this.tarefas.findIndex((t) => t.id === id);
    if (tarefaIndex === -1) {
      throw new NotFoundException('Id não encontrado');
    }
    this.tarefas.splice(tarefaIndex, 1);
  }
}
