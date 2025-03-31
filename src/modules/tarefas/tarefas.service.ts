import { v4 as uuidv4 } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Tarefa } from './entities/tarefas.entity';

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

  async create(body: Partial<Tarefa>): Promise<Tarefa> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newId = uuidv4();
    const newTarefa: Tarefa = {
      id: newId,
      name: body.name || '',
      description: body.description || '',
      isCompleted: body.isCompleted || false,
    };
    this.tarefas.push(newTarefa);
    return newTarefa;
  }

  async updateTarefa(
    id: string,
    body: Omit<Partial<Tarefa>, 'id'>,
  ): Promise<Tarefa> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const tarefaIndex = this.tarefas.findIndex((t) => t.id === id);
    if (tarefaIndex === -1) {
      throw new NotFoundException('Tarefa com esse id nao encontrada!');
    }
    this.tarefas[tarefaIndex] = {
      ...this.tarefas[tarefaIndex],
      ...body,
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
