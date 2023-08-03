import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: UsersService) { }

    @Post("login")
    async login(@Body() authDto: AuthDto) : Promise<any> {
        
        return this.authService.queryLogin(authDto)
        
    }
}
