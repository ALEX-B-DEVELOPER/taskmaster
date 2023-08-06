import React, { ChangeEvent } from "react";

export const handleSelect = (event: ChangeEvent<HTMLInputElement>, values: any, setValues: React.Dispatch<React.SetStateAction<any>>)=>{
    const value = event.target.value;
    const name = event.target.id;
    setValues({ ...values,[name]: value})
}