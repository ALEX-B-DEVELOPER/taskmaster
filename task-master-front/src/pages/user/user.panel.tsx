import Link from "next/link";
import router from "next/router"
import React, { useState } from "react";


export default function UserPanel(){

    const [isClient, setIsClient] = useState(false)
       
    React.useEffect(() => {
          setIsClient(true)
        }, [])

    let user, email, id;
    if(typeof window !== 'undefined'){
        if (isClient){
            user = sessionStorage.getItem("user");
            email = sessionStorage.getItem("email");
            id = sessionStorage.getItem("id");
        }
    }

    const logout = async () => {
        sessionStorage.clear()
        router.push("/")
    }

    return(
        <div className="container-dashboard">
            <h2>TASK-MASTER</h2>
            <hr />
            <h5 className="font-weight-bold">HELLO USER: {user}
            <br />
            {email}</h5>
            <Link className="btn btn-sm btn-outline-light" href={"/user/" + id}> EDIT PROFILE </Link> {' '}    
            <Link className="btn btn-outline-danger btn-sm" href={""} onClick={logout}>LOGOUT</Link> <br /> <br />  
            <p>SUMMARY:<br />5 not starting | 5 in progress | 5 finished </p>                         
    </div>
    )

}