import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import InputText from "@/app/components/forms/input-text/input-text";
import { httpPost } from "@/app/core/http-request-contract";
import { useState } from "react";
import { handleInput } from "@/app/core/repository/handle-input"
import { taskModel, validateTaskBody } from "@/app/core/repository/task/task-body";

export default function CreateTaskComponent() {
    const [values, setValues] = useState(taskModel)

    const createTask = () => {
        let validation = validateTaskBody(values)
        if (typeof validation === 'string') alert (validation)
        else httpPost("tasks", values).then((response) => {console.log(response);}).catch((error) => {console.log(error)})
    }

    return (
        <div className="container-dashboard">
        <h1>New Task</h1>
        <form>
        <InputText hint="Title" id="title" type="text" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Date" id="datetime" type="date" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Priority" id="priority" type="number" value="1" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Status" id="status" type="number" value="1" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Description" id="description" type="textarea" handleInput={[handleInput, values, setValues]} />
        <ButtonPrimary text="Create Task" callBack={() => { createTask() }} />
        </form>
    </div>
    )
}