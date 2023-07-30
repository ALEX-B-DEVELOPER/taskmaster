import "@/app/css/dashboard.css"
import "@/app/css/container-dashboard.css"
import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from "react"
import { httpGet } from "@/app/core/http-request-contract"
import CreateTask from "@/pages/task/create"
import { taskModel } from "@/app/core/repository/task/task-body"
import ContainerTask from "@/app/components/container-task/container-task"
import router from "next/router"


export default function DashboardComponent(){

    const [tasks, setTask] = useState(taskModel)

    React.useEffect(() => {
        httpGet("tasks").then((data) => { setTask(data)}).catch((error) => console.log(error))
    }, [])

    const results = tasks.map((task) =>
        <ContainerTask key={task.id} task={task} />
    );

    const logout = async () => {
        sessionStorage.clear()
        router.push("/")
    }

    return(
        <section className="dashboard-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="container-dashboard">
                            Hola <br />
                            <a className="btn btn-outline-danger btn-sm" onClick={logout}>SALIR</a>
                        </div>
                        <CreateTask />
                    </div>
                    <div className="col-md-8">
                        <div className="container-dashboard fixed-panel">
                            <div className="row">
                                {results}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}