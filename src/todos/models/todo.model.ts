// src/todo.model.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  complete: boolean;
}
