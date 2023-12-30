import BaseDTO from './BaseDTO';

export class TodoDTO extends BaseDTO {
  public userId?: number;
  public title!: string;
  public completed!: boolean;
}
export class CreateTodoDTO extends TodoDTO {}
export class UpdateTodoDTO extends BaseDTO {
  public userId?: number;
  public title?: string;
  public completed?: boolean;
}
