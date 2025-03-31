import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TarefasService],
  controllers: [TarefasController],
})
export class TarefasModule {}
