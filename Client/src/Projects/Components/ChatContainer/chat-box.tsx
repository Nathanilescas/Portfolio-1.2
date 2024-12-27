import { useRef } from 'react';

import './chat-box.css'


import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ContactButton from '../Contact-Button/contact-button';


export default function ChatBox() {

    const chatContainer = useRef<HTMLDivElement>(null);
    const contactButton = useRef<HTMLDivElement>(null);


    const closeChat = () => {
        if (chatContainer.current && contactButton.current) {
            chatContainer.current.classList.remove('in-view')
            contactButton.current.classList.remove('fade-out')
        } 
    }
    const openChat = () => {
        if (chatContainer.current && contactButton.current) {
            chatContainer.current.classList.add('in-view')
            contactButton.current.classList.add('fade-out')
        }
    }

    return (
        <>
            <div id="chatContainer" ref={chatContainer} className='movement'>
                <div className="messageContainer"> 
                    <div className="options">
                        <button onClick={closeChat}><i><FaMinus /></i></button>
                    </div>

                    <div id="messageContainer">

                    </div>

                    <InputField/>
                </div>

            </div>
            <ContactButton
                handleClick={openChat}
                reference={contactButton}

            />
        </>
    )
}

function InputField() {
    const handleClick = () => {
        alert("Send message....")
    }
    return (
        <div className="messageInputs">
            <input type="text" placeholder="Write a message..."/>
            <button onClick={handleClick}><i><FaArrowAltCircleRight /></i></button>
        </div>
    )

}


// function ClientList() {
//     return (
//                     {/* <div className="clientListContainer">
//                 <ul id="clientList">
//                 </ul>
//             </div> */}
//     )
// }