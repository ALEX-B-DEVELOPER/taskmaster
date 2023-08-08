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
import { httpPost } from "@/app/core/http-request-contract"
import { handleInput } from "@/app/core/repository/handle-input"
import { registerBody, validateRegisterBody } from "@/app/core/repository/register/register-body"
import Swal from "sweetalert2"



export default function RegisterComponent(){

    const router = useRouter();
    const [values, setValues] = useState(registerBody)

    const validateRegister = async () =>{
        let validation = validateRegisterBody(values)
        if (typeof validation === 'string') Swal.fire({ icon:'error', title: validation , text:'PLEASE COMPLETE ALL REQUIRED FIELDS', footer: 'TASKMASTER', confirmButtonColor: '#254152'})
        else httpPost("users", values).then(() => { 
            Swal.fire({position:'top-end', icon:'success', title:'USER CREATED SUCCESSFULY</br> Please login with your new information', showConfirmButton:false, timer: 1500 });
            router.push("/")
        })
            .catch((err) => { console.log(err) });
    }

    return(
        <section className="login-bg">
            <div className="container">
                    <div className="container-login">
                        <h1>REGISTER</h1>
                        <form>
                        <InputText id='name' hint="Name" type='text' handleInput={[handleInput, values, setValues]} />
                        <InputText id='lastName' hint="Last Name" type='text' handleInput={[handleInput, values, setValues]} />
                        <InputText id='email' hint="Email" type='email' handleInput={[handleInput, values, setValues]} />
                        <InputText id='password' hint="Password" type='password' handleInput={[handleInput, values, setValues]} />
                        <ButtonPrimary text="Sign Up" callBack={()=>{validateRegister()}}/>
                        <br /><br />
                        <Link href={"/"}>Back to Login</Link>
                        </form>
                    </div>
            </div>
        </section>
    )
}