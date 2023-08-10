'use client'
import "@/app/globals.css"
import "@/app/css/dashboard.css"
import "@/app/css/container-dashboard.css"
import "bootstrap/dist/css/bootstrap.css"
import CreateTask from "@/pages/task/create"
import UserPanel from "../user/user.panel"
import TaskList from "../task/list"
import React from "react"
import router from "next/router"

export default function DashboardComponent(){

   React.useEffect(()=>{
        validateSesion();
    },[])

    const validateSesion = ()=>{
        if (localStorage.getItem("user") == null)
            router.push("/")
    }
    
    return(
        <section className="dashboard-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <UserPanel />
                        <CreateTask />
                    </div>
                    <div className="col-md-8">
                        <div className="container-dashboard fixed-panel">
                            <TaskList/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}