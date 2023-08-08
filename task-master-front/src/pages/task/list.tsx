import ContainerTask from "@/app/components/container-task/container-task";
import { httpGet } from "@/app/core/http-request-contract";
import { taskModel } from "@/app/core/repository/task/task-body";
import React from "react";
import { useState } from "react";

export default function TaskList(){
    const [tasks, setTask] = useState(taskModel)

    React.useEffect(() => {
        httpGet("tasks").then((data) => { setTask(data)}).catch((error) => console.log(error));
    }, [])

    const results = tasks.map((task) =>
        <ContainerTask key={task.id} task={task} />
    );

    return(
        <div className="row">{results}</div>
    )
}