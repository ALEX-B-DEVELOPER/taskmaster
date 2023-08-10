import ContainerTask from "@/app/components/container-task/container-task";
import { httpGet } from "@/app/core/http-request-contract";
import { taskModel } from "@/app/core/repository/task/task-body";
import React, { useEffect } from "react";
import { useState } from "react";

export default function TaskList(){
    const [tasks, setTask] = useState(taskModel)
    const [myUserId, setMyUserId] = useState('')

    React.useEffect(() => {
        httpGet("tasks").then((data) => { setTask(data)}).catch((error) => console.log(error));
    }, [])

    useEffect(() => {
        setMyUserId(localStorage.getItem('id')!)
      }, [])

    let myTasks = tasks.filter(task => task.userId == myUserId)
    const results = myTasks.map((myTasks) =>
        <ContainerTask key={myTasks.id} task={myTasks} />
    );

    return(
        <div className="row">
            {results}
            </div>
    )
}