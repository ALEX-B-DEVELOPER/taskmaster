import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tasks } from './model/task.entity';
import { TaskCreateDto } from './dto/task.create.dto';


@Injectable()
export class TasksService {
    constructor(@InjectModel(Tasks) private readonly taskModel: typeof Tasks) { }

    async getAllTask(): Promise<Tasks[]> {
        return await this.taskModel.findAll()
    }

    async createTask(dto: TaskCreateDto): Promise<Tasks | any> {
        return await this.taskModel.create({
            title: dto.title,
            description: dto.description,
            priority: dto.priority,
            datetime: dto.datetime
        }).then((response) => response).catch((error) => {  return { "message_error": "exist title task" } });
    }
}
