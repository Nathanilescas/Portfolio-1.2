import { useEffect } from "react";
import HamburgerButton from "./NavComponents/HamburgerButton/hamburger-button";
import AccessForm  from "./NavComponents/AccessForm/access-form";

// Files
import logo from '../../../public/Logo/site_logo-60x42.png'
import resume from '../../../Data/Resume_Nathan-Ilescas.pdf'

// Styles
import './nav-1.css';
import { IoMdArrowDropdown } from "react-icons/io"; // React-Icon
import AccessPopUp from "../Pop-Up/access-pop-up";


function DropDownMenu() {
    
    return (
        <div className="nav-dropdown-menu hide">
            <section className="dropdown-section">
                <h2>Algorithms</h2>
                <ul>
                    <li><a href="">Soon...</a></li>
                </ul>
            </section>
            <section className='dropdown-section' >
                <h2>Data Structure</h2>
                <ul>
                    <li><a href="">Soon...</a></li>
                </ul>
            </section>
            <section className="dropdown-section">
                <h2>Personal</h2>
                <ul>
                    <li><a href="">Click Here</a></li>
                </ul>
            </section>
        </div>
    )
}

function Navigation_1(props:any) {

    function checkAttributes() {
        const nav_items = document.getElementsByClassName('nav-list');
        const items = nav_items[0].querySelectorAll('li');

        for (let i = 0; i < items.length; i++) {
            const attribute = items[i].getAttribute('data-nav-id');
            if (attribute == props.isActive) {
                items[i].classList.add('active')
            }
        }
    }

    useEffect(() => {
        checkAttributes();
    });

    return (
        <nav id="nav-bar">
            <figure className="nav-image"><img src={logo} alt="Logo" /></figure>
            <div className="nav-menu-container" >
                <ul className="nav-list">
                    <li data-nav-id={'home'}><a href="/">Home</a></li>   
                    <li data-nav-id={'projects'}><a href="">Projects</a></li>
                    <li data-nav-id={'blog'} className="nav-dropdown-item" onClick={toggleListItems}><a>Blog</a><span className='nav-dropdown-icon flip-icon'><IoMdArrowDropdown /></span></li>
                    <li><a href={resume}>Resume</a></li>
                </ul>
                <DropDownMenu/>
                <AccessForm showAccessForm={toggleAccessMenu} />
            </div>
            <AccessPopUp
                showAccessForm={toggleAccessMenu}
            />
            <HamburgerButton closeListItems={closeListItems} toggleMenu={toggleMenu}/>
        </nav>
    )
}




/* CLOSE/OPEN MENU */
function toggleListItems() {
    document.getElementsByClassName('nav-dropdown-menu')[0].classList.toggle('hide');
}
function closeListItems() {
    document.getElementsByClassName('nav-dropdown-menu')[0].classList.add('hide');
}
function toggleMenu() {
    document.getElementsByClassName('nav-menu-container')[0].classList.toggle('slide-menu');
}


/* Show Login Menu */
function toggleAccessMenu() {
    document.getElementsByClassName('accessForm')[0].classList.toggle('visible')
}


export default Navigation_1;