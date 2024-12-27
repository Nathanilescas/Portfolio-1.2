import './contact-button.css'
import '../../../Effects/fade-in-out.css'

import { LuMessageCircle } from "react-icons/lu";


export default function ContactButton(props: any) {
    return (
        <span className='contactButton fade-option' onClick={props.handleClick} ref={props.reference}><i><LuMessageCircle /></i></span>
    )
}