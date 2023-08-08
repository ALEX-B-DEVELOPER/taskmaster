'use client'
import "@/app/globals.css"
import "@/app/css/login.css"
import "@/app/css/container-login.css"
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
import Swal from 'sweetalert2'


export default function LoginComponent(){

    const router = useRouter();
    const [values, setValues] = useState(loginBody)

    React.useEffect(()=>{
        validateSesion()
    },[])

    const validateSesion = ()=>{
        if (sessionStorage.getItem("user") != null){
            Swal.fire({position:'top-end', icon:'success', title:'SUCCESS LOGIN </br> WELCOME BACK!', showConfirmButton:false, timer: 1500 })
            router.push("/dashboard")
        }else {
            router.push("/")
        }
    }

    const validateLogin = async () =>{
        let validation = validateLoginBody(values)
        if (typeof validation === 'string') Swal.fire({ icon:'error', title: validation , text:'PLEASE COMPLETE ALL REQUIRED FIELDS', footer: 'TASKMASTER', confirmButtonColor: '#254152'})
        else await httpPost("users/login", values).then((response) => {
            if(response.name != null || response.name != undefined){
                sessionStorage.setItem("user", response.name); 
                sessionStorage.setItem("id", response.id); 
                sessionStorage.setItem("email", response.email);
                sessionStorage.setItem("access_token", response.access_token)
            }            
            else Swal.fire({ icon:'error', title:'Wrong login data', text:'PLEASE TRY AGAIN', footer: 'TASKMASTER', confirmButtonColor: '#254152'})
        })
        .catch((err)=>{console.log(err)});
        validateSesion();
    }

    return(
        <section className="login-bg">
            <div className="container">

                    <div className="container-login">
                        
                        <h3>WELCOME TO</h3>
                        <h1>TASKMASTER</h1>
                        <form>
                        <InputText id='email' hint="Email" type='email' handleInput={[handleInput, values, setValues]} />
                        <InputText id='password' hint="Password" type='password' handleInput={[handleInput, values, setValues]} />
                        <ButtonPrimary text="Login" callBack={()=>{validateLogin()}}/>
                        <br /><br />
                        <Link href={"/register"}>Don´t have an account? Please register here.</Link>
                        <br />
                        <Link href={"/reset"}>Forgot your password? Click here</Link>
                        </form>
                </div>
            </div>
        </section>
    )
}