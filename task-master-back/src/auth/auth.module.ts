import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/users/model/users.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports :[ SequelizeModule.forFeature([Users])],
  controllers: [AuthController],
  providers: [UsersService]
})
export class AuthModule {}
