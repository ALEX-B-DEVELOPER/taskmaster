export const taskModel = [{ id: 1, title: "", description: "", status: "", datetime: "", priority: "" }];

export function validateTaskBody(task: typeof taskModel): String | typeof taskModel{

    //if(task.title == '') return 'Title is Empty'
    //if(task.description == '') return 'Description is Empty'
    //if(task.datetime == '') return 'Datetime is Empty'
    //if(task.status == '') return 'Status is Empty'
    //if(task.priority == '') return 'Priority is Empty'

    return task
}