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



export default function RegisterComponent(){

    const router = useRouter();
    const [values, setValues] = useState(registerBody)

    //router.push("/login")

    const validateRegister = async () =>{
        let validation = validateRegisterBody(values)
        if (typeof validation === 'string') alert (validation)
        else httpPost("users", values).then((response) => { console.log(response) }).catch((err) => { console.log(err) });
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