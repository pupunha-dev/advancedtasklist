import { v4 as uuidv4 } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Tarefa } from './entities/tarefas.entity';
import { CreateTarefaDto } from './dtos/create-tarefa.dto';
import { UpdateTarefaDto } from './dtos/update-tarefa.dto';

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [];

  async findAll(): Promise<Tarefa[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return this.tarefas;
  }

  async findOne(id: string): Promise<Tarefa | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const resultado = this.tarefas.find((t) => t.id === id);
    if (!resultado) {
      throw new NotFoundException('Tarefa com id nao encontrada!');
    }
    return resultado;
  }

  async create(createTarefaDto: Partial<CreateTarefaDto>): Promise<Tarefa> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newId = uuidv4();
    const newTarefa: Tarefa = {
      id: newId,
      name: createTarefaDto.name || '',
      description: createTarefaDto.description || '',
      isCompleted: false,
    };
    this.tarefas.push(newTarefa);
    return newTarefa;
  }

  async updateTarefa(
    id: string,
    updateTarefaDto: Omit<Partial<UpdateTarefaDto>, 'id'>,
  ): Promise<Tarefa> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const tarefaIndex = this.tarefas.findIndex((t) => t.id === id);
    if (tarefaIndex === -1) {
      throw new NotFoundException('Tarefa com esse id nao encontrada!');
    }
    this.tarefas[tarefaIndex] = {
      ...this.tarefas[tarefaIndex],
      ...updateTarefaDto,
    };
    return this.tarefas[tarefaIndex];
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
