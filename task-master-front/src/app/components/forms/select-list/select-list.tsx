import "bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from "react";

export default function SelectList(props: { list?: string[], value? : string, id: string, handleInput: any[]}) {
    
    const [selected, setSelected] = useState('');
    
    useEffect(() => { if (props.value != null) { setSelected(props?.value)} }, [])

    return (
        <select className='form-select mt-3' id={props.id} value={selected} onChange={e => {
            setSelected(e.target.value.toString());            
            props.handleInput[0](e, props.handleInput[1], props.handleInput[2]);
            
        }} >
            {props.list?.map((element, i)=>            
                <option value={i} key={i}>{element}</option>)
            }
        </select>
    ) 
}