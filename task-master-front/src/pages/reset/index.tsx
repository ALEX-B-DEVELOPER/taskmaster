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



export default function ResetComponent(){

    const router = useRouter();
    const [values, setValues] = useState(registerBody)

    //router.push("/login")

    const validateUser = async () =>{
    }

    return(
        <section className="login-bg">
            <div className="container">
                    <div className="container-login">
                        <h1>Password Reset</h1>
                        <form>
                        <InputText id='email' hint="Email" type='email' handleInput={[handleInput, values, setValues]} />
                        <ButtonPrimary text="Sign Up" callBack={()=>{validateUser()}}/>
                        <br /><br />
                        <Link href={"/login"}>Back to Login</Link>
                        </form>
                    </div>
            </div>
        </section>
    )
}