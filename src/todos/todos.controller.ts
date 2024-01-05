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
    this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} todo`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: CreateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} todo`;
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
