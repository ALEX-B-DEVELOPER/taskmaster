import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './model/users.entity';
import { UserCreateDto } from './dto/user.create.dto';
import { UserLoginDto } from './dto/user.login.dto';
import { UserUpdateDto } from './dto/user.update.dto';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get()
    getAllUsers(): Promise<Users[] | any> {
        return this.service.findAll()
    }

    @Get("/:id")
    async getUserForId(@Param() params: any): Promise<Users> {
        return await this.service.getUserForId(params.id)
    }

    @Post()
    createUser(@Body() createUser: UserCreateDto): Promise<Users | any> {
        return this.service.insert(createUser)
    }

    @Post("/login")
    login(@Body() login: UserLoginDto): Promise<Users | any> {
        return this.service.queryLogin(login).catch((error)=>{console.log(error)})
    }

    @Put("/:id")
    async updateTask(@Param() params: any, @Body() dto: UserUpdateDto): Promise<Users> {
        return await this.service.updateUser(params.id , dto)
    }
}