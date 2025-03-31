export class Tarefa {
  id: string;
  name: string;
  description: string | null;
  isCompleted: boolean;
  createdAt?: Date | null;
}
