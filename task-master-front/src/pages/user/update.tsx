import ButtonPrimary from "@/app/components/forms/button-primary/button-primary";
import InputText from "@/app/components/forms/input-text/input-text";
import { httpPut } from "@/app/core/http-request-contract";
import { useEffect, useState } from "react";
import { handleInput } from "@/app/core/repository/handle-input"
import router from "next/router";
import Link from "next/link";
import { userBody } from "@/app/core/repository/user/user-body";


export default function UpdateUserComponent(props: { user?: typeof userBody }) {
    const [values, setValues] = useState(userBody)

    useEffect(() => {
        if (props.user?.name != '' && props.user != null) {
            setValues(props.user)
        }
    }, [])

    const updateUser = () => {
        httpPut("users", values, props.user?.id + '').then((response) => {
            console.log(response);            
        }).catch((error) => {
            console.log(error)
        })
        router.push("/dashboard")
    }

    return (
        <div className="container-dashboard">
        <h3>EDIT PROFILE</h3>
        <form>
        <InputText hint="Name" id="name" value={props.user?.name} type="text" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Lastname" id="lastName" value={props.user?.lastName} type="text" handleInput={[handleInput, values, setValues]} />
        <InputText hint="Email" id="email" value={props.user?.email} type="text" handleInput={[handleInput, values, setValues]} />
        <div className="flex-center updateform">
        <Link className="form-control btn btn-outline-light mt-3" href={"/dashboard/"}> Cancel </Link>     
        <ButtonPrimary text="Update" callBack={() => { updateUser() }} />
        </div>            
        </form>
    </div>
    )
}