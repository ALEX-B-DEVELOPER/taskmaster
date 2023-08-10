import "@/app/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import "@/app/css/dashboard.css"
import "@/app/css/container-dashboard.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { httpGet } from "@/app/core/http-request-contract";
import { userBody } from "@/app/core/repository/user/user-body";
import UpdateUserComponent from "./update";
import React from "react";

export default function EditUserComponent() {

    const [user, setUser] = useState(userBody)
    const [render, renderUser] = useState(<UpdateUserComponent/>)
    const router = useRouter()

    useEffect(() => {
        if (router.asPath !== router.route) {
            httpGet("users/" + router.query.id).then((response) => {
                setUser(response)
                console.log(response);
                renderUser(<UpdateUserComponent user={user}/>)

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
        <div>{user.id != 0 ? 
            (<section className="dashboard-bg updateform"><UpdateUserComponent user={user} /></section>) 
            : (<div></div>)}</div>
    )
}