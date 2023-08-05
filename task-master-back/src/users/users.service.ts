import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from './model/users.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateDto } from './dto/user.create.dto';
import { UserLoginDto } from './dto/user.login.dto';
import { UserUpdateDto } from './dto/user.update.dto';
import { JwtService } from '@nestjs/jwt';

const md5 = require('md5');

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private readonly usersModel: typeof Users,
        private jwtService: JwtService
    ) { }

    findAll(): Promise<Users[]> {
        return this.usersModel.findAll();
    }

    async insert(dto: UserCreateDto): Promise<Users> {
        return await this.usersModel.create({
            name: dto.name,
            lastName: dto.lastName,
            email: dto.email,
            password: md5(dto.password)
        }).then((response) => response).catch((error) => error);
    }

    async queryLogin(dto: UserLoginDto): Promise<Users | any> {
        let  user =  await this.usersModel.findOne({ 
            where: { email: dto.email, password: md5(dto.password) }, 
            attributes: ['name', 'email', 'id'] });
        if(user === undefined ){
            throw new UnauthorizedException();
        }
        const payload = { sub: user.name, email: user.email, id: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload),
            name: user.name,
            email: user.email,
            id: user.id
        };
    }

    async updateUser(_id: number, dto: UserUpdateDto): Promise<Users | any> {
        return await this.usersModel.update(
            {
                name: dto.name,
                lastName: dto.lastName,
                email: dto.email
            }, {
            where: { id: _id }
        }
        ).then((response) => response).catch((error) => { return { "message_error": "NOT UPDATE TASK" } });
    }

    async getUserForId(_id: number): Promise<Users> {
        return await this.usersModel.findOne( 
            {
                where: {
                    id: _id
                }
            }
        )
    }

}