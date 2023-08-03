import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './model/users.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports :[ SequelizeModule.forFeature([Users]),
  JwtModule.register({
    global: true,
    secret: "123",
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}