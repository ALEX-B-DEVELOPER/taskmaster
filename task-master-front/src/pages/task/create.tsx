import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import InputText from "@/app/components/forms/input-text/input-text";
import { httpPost, httpPut } from "@/app/core/http-request-contract";
import { useEffect, useState } from "react";
import { handleInput } from "@/app/core/repository/handle-input"
import { taskModel, taskModelSingle, validateTaskBody } from "@/app/core/repository/task/task-body";
import router from "next/router";
import Link from "next/link";
import { StatusModel } from "@/app/core/repository/status/status-body";
import SelectList from "@/app/components/forms/select-list/select-list";
import { setDate } from "@/app/core/functions";
import { handleSelect } from "@/app/core/repository/handle-select";


export default function CreateTaskComponent(props: { task?: typeof taskModelSingle }) {

    const [values, setValues] = useState(taskModel)

    useEffect(() => {
        if (props.task?.title != '' && props.task != null) {
            setValues([props.task])
        }
    }, [])

    const createTask = () => {
        let validation = validateTaskBody(values)
        if (typeof validation === 'string' ) alert (validation)
        else httpPost("tasks", values).then((response) => {router.reload();}).catch((error) => {console.log(error)})
    }

    const updateTask = () => {
        httpPut("tasks", values, props.task?.id + '').then((response) => {router.push("/dashboard");}).catch((error) => {console.log(error)})
    }

    return (
        <div className="container-dashboard">
        {props.task?.id != null ? (<h3>EDIT TASK</h3>) : (<h3>NEW TASK</h3>)}
        <form>
        <InputText hint="Title" id="title" value={props.task?.title} type="text" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Date" id="datetime" value={setDate(props.task?.datetime)} type="date" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Priority" id="priority" value={props.task?.priority} type="number" handleInput={[handleInput, values, setValues]} />       

        {props.task?.id != null ? (
        <SelectList list={StatusModel} id="status" value={props.task?.status} handleInput={[handleSelect, values, setValues]}/>) 
        : (<SelectList list={StatusModel} id="status" handleInput={[handleSelect, values, setValues]}/>)}

        <InputText hint="Description" id="description" value={props.task?.description} type="textarea" handleInput={[handleInput, values, setValues]} />
        {
            props.task?.id != null ? (
            <div className="flex-center updateform">
            <Link className="form-control btn btn-outline-light mt-3" href={"/dashboard"}> Cancel </Link>     
            <ButtonPrimary text="Update" callBack={() => { updateTask() }} /></div>            
            ) : (<ButtonPrimary text="Create Task" callBack={() => { createTask() }} />)
        }
        </form>
    </div>
    )
}