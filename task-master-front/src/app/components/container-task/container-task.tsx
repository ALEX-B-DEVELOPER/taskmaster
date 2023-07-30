import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link";
import { useEffect } from "react";


export default function ContainerTask(props: { task: any }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    return (
        <div className="col-md-4" >
            <div className="list-group">
                <div className="list-group-item active text-uppercase">
                    <h4>{props.task.title}</h4>
                    {props.task.datetime}        
                </div>
                <div className="list-group-item">                
                    <button type="button" className="btn btn-primary form-control" data-bs-toggle="modal" data-bs-target={"#task" + props.task.id}                   >
                        Details
                    </button>
                    <br />
                    <Link href={"/task/" + props.task.id}>Edit</Link>
                </div>                
                <div className="d-flex justify-content-center align-items-center">
                    <div
                        className="modal fade"
                        id={"task" + props.task.id}
                        aria-labelledby="taskLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
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
                                    {props.task.id} <br />
                                    {props.task.name} <br />
                                    {props.task.description} <br />
                                    {props.task.priority} <br />                                   
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