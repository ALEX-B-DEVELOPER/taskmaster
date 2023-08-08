import "bootstrap/dist/css/bootstrap.css"
import "@/app/components/container-task/container-task.css"
import Link from "next/link";
import { useEffect } from "react";
import { httpDelete } from "@/app/core/http-request-contract";
import { setDate } from "@/app/core/functions";
import router from "next/router";
import animationNotStarted from "@/app/assets/images/not-started.json"
import animationInProgress from "@/app/assets/images/in-progress.json"
import animationCompleted from "@/app/assets/images/finished.json"
import Lottie from "lottie-react";

export default function ContainerTask(props: { task: any }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    const deleteTask = (id: any)=>{
        alert("Está seguro que desea eliminar la tarea?");
        httpDelete("tasks", id).then((response) => { router.reload() }).catch((err) => { console.log(err) });
    }

    const status = () =>{
            if (props.task.status == 0 )
                return <div className="statuslabel notstated">NOT STARTED<Lottie animationData={animationNotStarted} loop={false}/></div>
            else if (props.task.status == 1)
                return <div className="statuslabel inprogress">IN PROGRESS<Lottie animationData={animationInProgress} loop={true}/> </div> 
            else if (props.task.status == 2)
                return <div className="statuslabel completed">COMPLETED<Lottie animationData={animationCompleted} loop={true}/> </div>
            else return ''
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
                {status()}    
                <br /><p className="datelabel"> DUE DATE: {setDate(props.task.datetime)}</p>                  
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
                                    TASK DETAILS:
                                    </h5>                                                                 
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <h1>{props.task.title}</h1><br />
                                    {status()} <br />
                                    <p className="datelabelpopup">DUE DATE: <br />{setDate(props.task.datetime)} </p>
                                    <p>PRIORITY: {props.task.priority} </p>                                     
                                    <p>DESCRIPTION: <br />{props.task.description} </p>                         
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