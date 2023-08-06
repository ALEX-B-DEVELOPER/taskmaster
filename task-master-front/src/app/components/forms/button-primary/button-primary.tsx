import "bootstrap/dist/css/bootstrap.css"

export default function ButtonPrimary (props: { text: string, callBack: Function }) {
    return (
        <button type="button" className="form-control btn btn-primary mt-3" onClick={function(){props.callBack()}}>{props.text}</button>
    );
}


