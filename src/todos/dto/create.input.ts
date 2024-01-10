// src/todos/dtos/create-todo.input.ts

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  name: string;
}
