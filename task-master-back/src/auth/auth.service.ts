import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/users/model/users.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Users)
        private readonly usuarioModel: typeof Users) { }
}