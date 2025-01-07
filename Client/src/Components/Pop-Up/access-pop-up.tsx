import { IoClose } from "react-icons/io5";

import './access-pop-up.css'

function AccessPopUp ({showAccessForm}) {
    return(
        <div className="accessForm">
            <form action="">
                <span onClick={showAccessForm}><IoClose/></span>
                <h2>Only Nate is Allowed</h2>
                <div>
                    <label htmlFor="">UserName:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="Pass">Password:</label>
                    <input type="text" />
                </div> 
                <button>Submit</button>
            </form>
        </div>
    )
}



export default AccessPopUp;