import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTarefaDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(6, { message: 'O nome precisa ter pelo menos 6 caracteres.' })
  readonly name: string;

  @IsString()
  @MinLength(6)
  @MaxLength(300)
  @IsOptional()
  readonly description: string;
}
