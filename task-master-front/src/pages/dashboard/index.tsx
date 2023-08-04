import "@/app/globals.css"
import "@/app/css/dashboard.css"
import "@/app/css/container-dashboard.css"
import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from "react"
import { httpGet } from "@/app/core/http-request-contract"
import CreateTask from "@/pages/task/create"
import { taskModel } from "@/app/core/repository/task/task-body"
import ContainerTask from "@/app/components/container-task/container-task"
import router from "next/router"
import Link from "next/link"


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

 /*   let username;
        try{
            if(sessionStorage.getItem("user")?.toString() !== null){
            username = sessionStorage.getItem("user")?.toString()}
        }catch (err) {console.log(err)}
*/
    return(
        <section className="dashboard-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="container-dashboard">
                            <h2>TASK-MASTER</h2>
                            <hr />
                            <p>HELLO USER 
                            <br />
                            email@email.com</p>
                            <Link className="btn btn-sm btn-outline-light" href={"/user/" + 1}> EDIT PROFILE </Link> {' '}    
                            <Link className="btn btn-outline-danger btn-sm" href={""} onClick={logout}>LOGOUT</Link> <br /> <br />  
                            <p>SUMMARY:<br />5 not starting | 5 in progress | 5 finished </p>                         
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