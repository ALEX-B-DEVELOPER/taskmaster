import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'task-master',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }