import "@/app/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import "@/app/css/dashboard.css"
import "@/app/css/container-dashboard.css"
import { useRouter } from "next/router";
import CreateTaskComponent from "./create";
import { useEffect, useState } from "react";
import { httpGet } from "@/app/core/http-request-contract";
import React from "react";

export default function EditTaskComponent() {

    const [task, setTask] = useState({ id: 0, title: "", description: "", datetime: "", status: "", priority: "" })
    const [render, renderTask] = useState(<CreateTaskComponent/>)
    const router = useRouter()

    useEffect(() => {
        if (router.asPath !== router.route) {
            httpGet("tasks/" + router.query.id).then((response) => {
                setTask(response)
                console.log(response);
                renderTask(<CreateTaskComponent task={task}/>)

            }).catch((error) => console.log(error))
        }
    }, [router.isReady])

    React.useEffect(()=>{
        validateSesion();
    },[])

    const validateSesion = ()=>{
        if (localStorage.getItem("user") == null)
            router.push("/")
    }

    return (
        <div>{task.id != 0 ? 
            (<section className="dashboard-bg updateform"><CreateTaskComponent task={task} /></section>) 
            : (<div></div>)}</div>
    )
}