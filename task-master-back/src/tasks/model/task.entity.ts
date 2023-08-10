import { Column, Default, Model, Table } from "sequelize-typescript";

@Table
export class Tasks extends Model{
    @Column
    title: string
    @Column
    datetime: Date
    @Column
    priority: string
    @Default("0")
    @Column
    status: string
    @Column
    description: string
    @Column
    userId: string
}