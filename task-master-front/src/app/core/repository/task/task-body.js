export const taskModelSingle = { id: 1, title: "", description: "", datetime: "", priority: "", status: "" }
export const taskModel = [taskModelSingle]

export function validateTaskBody(task){

    if(task.title == '' || task.title == undefined) return 'Please add a title for your Task'
    if(task.datetime == '' || task.datetime == undefined) return 'Please add a due date for your Task'
    if(task.priority == '' || task.priority == undefined) return 'Please add a priority for your Task'
    if(task.description == '' || task.description == undefined) return 'Please add a description for your Task'

    return task
}