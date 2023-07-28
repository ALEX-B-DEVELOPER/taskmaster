import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './model/task.entity';
import { TaskCreateDto } from './dto/task.create.dto';

@Controller('tasks')
export class TasksController {
    constructor(private service: TasksService) { }

    @Get()
    async getTask(): Promise<Tasks[]> {
        console.log("estoy aqui");
        return await this.service.getAllTask()
    }

    @Post()
    async createTask(@Body() dto: TaskCreateDto): Promise<Tasks> {
        return await this.service.createTask(dto)
    }
}
