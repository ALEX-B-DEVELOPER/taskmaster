import "bootstrap/dist/css/bootstrap.css"

export default function InputText(props: { hint: string, type: string, id: string, handleInput: any[], value?:string }) {
    return (
        <input className="form-control mt-3" type={props.type} placeholder={props.hint} id={props.id} name={props.id} onChange={e => props.handleInput[0](e, props.handleInput[1],props.handleInput[2])} />
    )
}