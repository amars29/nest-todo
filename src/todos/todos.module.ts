import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';

@Module({
  controllers: [TodosController],
  providers: [TodosService, TodosResolver],
  exports: [TodosService],
})
export class TodosModule {}
