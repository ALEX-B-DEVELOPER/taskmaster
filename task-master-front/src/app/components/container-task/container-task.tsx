import "bootstrap/dist/css/bootstrap.css"
import "@/app/components/container-task/container-task.css"
import Link from "next/link";
import { useEffect } from "react";
import { httpDelete } from "@/app/core/http-request-contract";
import Countdown from "@/app/components/countdown/countdown"



export default function ContainerTask(props: { task: any }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    const deleteTask = (id: any)=>{
        alert("Está seguro que desea eliminar la tarea?");
        httpDelete("tasks", id).then((response) => { console.log(response) }).catch((err) => { console.log(err) });
    }

    return (
        <div className="col-md-4" >
            <div className="list-group">
                <div className="list-group-item active text-uppercase">                                 
                    <Link className="btn btn-sm btn-outline-danger btn-edit" href={""} onClick={()=>{deleteTask(props.task.id)}}>DELETE</Link>   
                    <Link className="btn btn-sm btn-outline-light btn-edit" href={"/task/" + props.task.id}> Edit </Link>     
                </div>
                <div className="task-sheet list-group-item" data-bs-toggle="modal" data-bs-target={"#task" + props.task.id}>  
                <h3>{props.task.title}</h3> <hr />
                   <p> DUE DATE: {props.task.datetime}</p>                          
                </div>                
                <div className="d-flex justify-content-center align-items-center">
                    <div
                        className="modal fade"
                        id={"task" + props.task.id}
                        aria-labelledby="taskLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-uppercase" id="taskLabel">
                                        {props.task.title}
                                    </h5>                                                                 
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p>DUE DATE: <br />{props.task.datetime} </p>
                                    <p>TASK NAME: <br />{props.task.title} </p>
                                    <p>DESCRIPTION: <br />{props.task.description} </p>
                                    <p>PRIORITY: {props.task.priority} - STATUS: {props.task.status} </p>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )

}