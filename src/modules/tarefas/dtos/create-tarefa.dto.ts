import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTarefaDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly nome: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  readonly description: string;
}
