import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './model/users.entity';
import { UserCreateDto } from './dto/user.create.dto';
import { UserLoginDto } from './dto/user.login.dto';
import { error } from 'console';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get()
    getAllUsers(): Promise<Users[] | any> {
        return this.service.findAll()
    }

    @Post()
    createUser(@Body() createUser: UserCreateDto): Promise<Users | any> {
        return this.service.insert(createUser)
    }

    @Post("/login")
    login(@Body() login: UserLoginDto): Promise<Users | any> {
        return this.service.queryLogin(login).catch((error)=>{console.log(error)})
    }
}