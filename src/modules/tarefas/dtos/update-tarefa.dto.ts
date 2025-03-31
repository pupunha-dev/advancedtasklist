import { IsBoolean, IsOptional } from 'class-validator';
import { CreateTarefaDto } from './create-tarefa.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTarefaDto extends PartialType(CreateTarefaDto) {
  @IsBoolean()
  @IsOptional()
  readonly isCompleted?: boolean;
}
