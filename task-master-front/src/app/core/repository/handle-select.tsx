import React, { ChangeEvent } from "react";

export const handleSelect = (event: ChangeEvent<HTMLInputElement>, values: any, setValues: React.Dispatch<React.SetStateAction<any>>)=>{
    const {name, value} = event.target;
    alert("Seleccionaste la opcion " + value)
    setValues({ ...values,[name]: value})
}