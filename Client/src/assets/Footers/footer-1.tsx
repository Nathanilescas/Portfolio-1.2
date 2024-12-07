
import './Styles/styles.css'

export function Footer_1() {
    return (
        <footer id='footer'>
            <section className='footer-projects'>
                <header><h2>PERSONAL/WORK PROJECTS</h2></header>
                <ul>
                    <li>
                        <a href="">Session Recorder</a>
                        <p> "small description"</p>
                    </li>
                    <li>
                        <a href="">Chat Box</a>
                        <p>small description</p>
                    </li>
                    <li>
                        <a href="https://dnuevodesign.com/">Dnuevo Design</a>
                        <p>small description</p>
                    </li>
                    <li>
                        <a href="https://dnuevodesignpainting.com/">Dnuevo Design Painting</a>
                        <p>small description</p>
                    </li>
                </ul>
            </section>
            <section className='footer-blog'>
                <header><h2>BLOGS</h2></header>
                <section>
                    <header><h3>DSA</h3></header>
                    <ul>
                        <li><a href="">Algorithms</a></li>
                        <li><a href="">Data Structure</a></li>
                    </ul>
                </section>
                <section>
                    <header><h3>Personal</h3></header>
                    <ul>
                        <li><a href="">Click here to view..</a></li>
                    </ul>
                </section>
            </section>
            <section className='footer-contact'>
                <form action="">
                    <h2>Contact Me</h2>
                    <fieldset>

                        <div>
                            <label htmlFor="">Name</label>
                            <input name='name' type="text" placeholder='John Doe'/>
                        </div>

                        <div>
                            <label htmlFor="">Email</label>
                            <input name='email' type="text" placeholder='example@gmail.com'/>
                        </div>
                    </fieldset>
                    <button id='footer-contact-submit' type='submit' onClick={checkContactEntry}>Send</button>
                </form>
            </section>
        </footer>
    )
}


function checkContactEntry() {
    event.preventDefault();

    const tag = document.getElementsByClassName('footer-contact')[0];
    const inputs = tag.querySelectorAll('input');
    
    for (let i = 0; i < inputs.length; i++) {
        const value = inputs[i].value;
        if (!checkNull(value)) {
            inputs[i].style.border = '4px solid red'
            console.log(inputs[i].parentElement?.classList.add('input-error-message'));
        }

    }
}
function checkNull(input) {
    return (input) ? true : false;
}
export default Footer_1;