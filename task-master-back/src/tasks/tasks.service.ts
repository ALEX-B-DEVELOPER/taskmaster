import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tasks } from './model/task.entity';
import { TaskCreateDto } from './dto/task.create.dto';
import { TaskUpdateDto } from './dto/task.update.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Tasks) private readonly taskModel: typeof Tasks) { }

    async getAllTask(): Promise<Tasks[]> {
        return await this.taskModel.findAll()
    }

    async getAllTaskForId(_id: number): Promise<Tasks> {
        return await this.taskModel.findOne(
            {
                where: {
                    id: _id
                }
            }
        )
    }

    async deleteTask(_id: number): Promise<Tasks | any>{
        return await this.taskModel.destroy(
            {
                where: {
                    id: _id
                }
            }
        )
    }

    async createTask(dto: TaskCreateDto): Promise<Tasks | any> {
        return await this.taskModel.create({
            title: dto.title,
            description: dto.description,
            priority: dto.priority,
            status: dto.status,
            datetime: dto.datetime,
            userId: dto.userId
        }).then((response) => response).catch((error) => {  return { "message_error": "exist title task" } });
    }

    async updateTask(_id: number, dto: TaskUpdateDto): Promise<Tasks | any> {
        return await this.taskModel.update(
            {
                title: dto.title,
                description: dto.description,
                priority: dto.priority,
                status: dto.status,
                datetime: dto.datetime
            }, {
            where: { id: _id }
        }
        ).then((response) => response).catch((error) => { return { "message_error": "NOT UPDATE TASK" } });
    }
}
