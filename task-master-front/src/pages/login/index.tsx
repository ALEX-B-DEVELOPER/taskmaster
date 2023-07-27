import "@/app/css/login.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import InputText from "@/app/components/forms/input-text/input-text"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {loginBody, validateLoginBody} from "@/app/core/repository/login/login-body" 
import { httpPost } from "@/app/core/http-request-contract"
import { handleInput } from "@/app/core/repository/handle-input"



export default function LoginComponent(){

    const router = useRouter();
    const [values, setValues] = useState(loginBody)

    React.useEffect(()=>{
        validateSesion()
    },[])

    const validateSesion = ()=>{
        if (sessionStorage.getItem("user") != undefined)
        console.log(sessionStorage.getItem("user"));
        //router.push("/dashboard")
    }

    const validateLogin = async () =>{
        let validation = validateLoginBody(values)
        if (typeof validation === 'string') alert (validation)
        else httpPost("users/login", values).then((response) => {sessionStorage.setItem("user", response.name);}).catch((err)=>{console.log(err)});
        validateSesion();
    }

    return(
        <section className="login-bg">
            <div className="container">
                    <div className="container-primary">
                        <h1>Welcome</h1>
                        <form>
                        <InputText id='email' hint="Email" type='email' handleInput={[handleInput, values, setValues]} />
                        <InputText id='password' hint="Password" type='password' handleInput={[handleInput, values, setValues]} />
                        <ButtonPrimary text="Login" callBack={()=>{validateLogin()}}/>
                        <br /><br />
                        <Link href={"/register"}>Don´t have an account? Please register here.</Link>
                        <br />
                        <Link href={"/recover"}>Forgot your password? Click here</Link>
                        </form>
                    </div>
            </div>
        </section>
    )
}