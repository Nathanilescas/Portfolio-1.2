import './access-form.css'



function AccessForm({showAccessForm}) {
    return (
        <ul className="accessButton">
            <li><button onClick={showAccessForm}>Login</button></li>
        </ul>
    )
}




export default AccessForm;