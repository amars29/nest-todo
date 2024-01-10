import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoInput } from './dto/create.input';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    {
      id: 1,
      name: 'Todo 1',
      complete: false,
    },
    {
      id: 2,
      name: 'Todo 2',
      complete: false,
    },
    {
      id: 3,
      name: 'Todo 3',
      complete: false,
    },
  ];

  // For controller
  // create(todo: Todo) {
  //   let id = this.todos.length;
  //   todo.id = ++id;
  //   this.todos.push(todo);
  //   return todo;
  // }

  /* For graphql */
  create(createTodoInput: CreateTodoInput): Todo {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      ...createTodoInput,
      complete: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: number): Todo {
    return this.todos.find((todo) => todo.id == id);
  }

  update(id: number, updatedTodo: Todo) {
    const index = this.todos.findIndex((todo) => todo.id == id);
    if (index == -1) return 'Todo not found';
    const updatedTodos = this.todos.map((todo) =>
      todo.id == id ? { ...todo, ...updatedTodo } : todo,
    );
    this.todos = updatedTodos;

    return this.todos;
  }

  remove(id: number) {
    const index = this.todos.findIndex((todo) => todo.id == id);
    if (index == -1) return 'Todo not found';
    this.todos.splice(index, 1);
    return this.todos;
  }
}
