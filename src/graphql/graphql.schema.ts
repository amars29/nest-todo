// src/graphql/graphql.schema.ts

import { ObjectType, Field, Int, ID, Args } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field((type) => Int)
  completed: number;
}

@ObjectType()
export class Query {
  @Field((type) => Todo)
  findOne(@Args('id', { type: () => ID }) id: string): Todo {
    // Your resolver logic here
    return { id: '1', title: 'Example Todo', completed: 0 };
  }

  @Field((type) => [Todo])
  findAll(): Todo[] {
    // Your resolver logic here
    return [{ id: '1', title: 'Example Todo', completed: 0 }];
  }
}
