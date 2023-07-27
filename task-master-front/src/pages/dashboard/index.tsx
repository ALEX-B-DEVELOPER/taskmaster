import "@/app/css/dashboard.css"
import "@/app/css/container-dashboard.css"
import "bootstrap/dist/css/bootstrap.css"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import InputText from "@/app/components/forms/input-text/input-text"
import Link from "next/link"
import React, { useState } from "react"
import { httpGet } from "@/app/core/http-request-contract"
import ContainerTask from "@/app/components/container-task/container-task"
import CreateTask from "@/pages/task/create"
import { taskModel } from "@/app/core/repository/task/task-body"

export default function DashboardComponent(){

    const [tasks, setTask] = useState(taskModel)

    React.useEffect(() => {
        httpGet("tasks").then((data) => {
            setTask(data)
            console.log(data)
        }).catch((error) => console.log(error))
    }, [])

    return(
        <section className="dashboard-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="container-dashboard">User panel</div>
                    <CreateTask />
                    </div>
                    <div className="col-md-8">
                    <div className="container-dashboard">
                        <p>Aquí va la lista de las tareas</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}