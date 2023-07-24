import "@/app/css/login.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import InputText from "@/app/components/forms/input-text/input-text"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import { useState } from "react"
import Link from "next/link"


export default function Login(){

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    return(
        <section className="login-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 container-primary">
                        <h1>Welcome</h1>
                        <form>
                        <InputText id='email' hint="Email" type='email' handleInput={setEmail} />
                        <InputText id='password' hint="Password" type='password' handleInput={setPassword} />
                        <ButtonPrimary text="Login" callBack={()=>{alert(email + " " + password)}}/>
                        <Link href={"/register"}>Don´t have an account? Please register here.</Link>
                        <Link href={"/reset"}>Don´t have an account? Please register here.</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}