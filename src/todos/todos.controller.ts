import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any): Todo {
    return this.todosService.findById(params.id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTodoDto: CreateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todosService.remove(id);
  }

  /*  Note that when you inject either @Res() or @Response() in a method handler, you put Nest into Library-specific mode for 
    that handler, and you become responsible for managing the response. When doing so, you must issue some kind of response by  
    making a call on the response object (e.g., res.json(...) or res.send(...)), or the HTTP server will hang.*/
  //   @Get()
  //   findAll(@Res() response): string {
  //     // return 'This action returns all cats';
  //     return response.status(200).send('This action returns all cats');
  //   }

  //   @Post()
  //   //   Alternatively, you can use the @HttpCode() decorator to set the status code:
  //   //   @HttpCode(204)
  //   create(): string {
  //     return 'This action adds a new todo';
  //   }
}
