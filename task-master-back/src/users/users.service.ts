import { Injectable } from '@nestjs/common';
import { Users } from './model/users.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateDto } from './dto/user.create.dto';
import { UserLoginDto } from './dto/user.login.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private readonly usersModel: typeof Users,
    ) { }

    findAll(): Promise<Users[]> {
        return this.usersModel.findAll();
    }

    async insert(dto: UserCreateDto): Promise<Users> {
        return await this.usersModel.create({
            name: dto.name,
            lastName: dto.lastName,
            email: dto.email,
            password: dto.password
        }).then((response) => response).catch((error) => error);
    }

    async queryLogin(dto: UserLoginDto): Promise<Users | any> {
        let  user =  await this.usersModel.findOne({ where: { email: dto.email, password: dto.password }, attributes: ['name', 'lastName'] });
        if(user === null ){
            return {"message":"This users does not exist in our system"}
        }else{
            return user
        }
    }

}