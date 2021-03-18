import './button.css';
import Email from '../../assets/svgs/email.svg';

//props are just the params of the function
function Button(props){
    return <button className={props.type}>{props.label || "ui button"}</button>
}

// function CallToAction(props){
//     return <button className="call-to-action">{props.label || "ui call to action button"}</button>
// }

function IconButton(props){
    return (
    <button className="icon-button">
        <img src={Email} alt="email icon"/>
        {props.label || "ui icon button"}
    </button>
    )
}



export {Button, IconButton};