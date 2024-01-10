// src/todo.resolver.ts
import { Resolver, Query, Args, Int, Mutation, ID } from '@nestjs/graphql';
import { Todo } from './models/todo.model';
import { TodosService } from './todos.service';

import { CreateTodoInput } from './dto/create.input';

@Resolver((of) => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query((returns) => Todo)
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todosService.findById(id);
  }

  @Query((returns) => [Todo])
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Mutation((returns) => Todo)
  async createTodo(
    @Args('createTodoInput') CreateTodoInput: CreateTodoInput,
  ): Promise<Todo> {
    return this.todosService.create(CreateTodoInput);
  }

  @Mutation((returns) => [Todo])
  async updateTodo(
    @Args('id', { type: () => ID }) id: number,
    @Args('name') name: string,
    @Args('complete') complete: boolean,
  ): Promise<Todo[] | string> {
    return this.todosService.update(id, { id, name, complete });
  }
}
