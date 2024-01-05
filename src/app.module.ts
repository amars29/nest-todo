import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { TodosModule } from './todos/todos.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

// @Module({
//   imports: [
//     TodosModule,
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       include: [TodosModule],
//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
//       // autoSchemaFile: true,
//       sortSchema: true,
//       //
//       typePaths: ['./**/*.graphql'],
//       definitions: {
//         path: join(process.cwd(), 'src/graphql.ts'),
//         outputAs: 'class',
//       },
//     }),
//   ],
//   controllers: [AppController, AccountController],
//   providers: [AppService],
// })

@Module({
  imports: [
    TodosModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   include: [TodosModule],
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   // autoSchemaFile: true,
    //   sortSchema: true,
    //   //
    //   typePaths: ['./**/*.graphql'],
    //   definitions: {
    //     path: join(process.cwd(), 'src/graphql.ts'),
    //     outputAs: 'class',
    //   },
    // }),
  ],
  controllers: [AppController, AccountController],
  providers: [AppService],
})

// @Module({
//   imports: [
//     TodosModule,
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       autoSchemaFile: 'schema.gql',
//       // transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
//       installSubscriptionHandlers: true,
//       buildSchemaOptions: {
//         directives: [
//           new GraphQLDirective({
//             name: 'upper',
//             locations: [DirectiveLocation.FIELD_DEFINITION],
//           }),
//         ],
//       },
//     }),
//   ],
// })
export class AppModule {}
