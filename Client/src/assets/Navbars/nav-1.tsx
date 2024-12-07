import { useEffect } from "react";


import './Styles/nav-general.css';
import { IoMdArrowDropdown } from "react-icons/io"; // React-Icon


function DropDownMenu() {
    return (
        <div className="nav-dropdown-menu hide">
            <section className="dropdown-section">
                <h2>Algorithms</h2>
                <ul>
                    <li><a href="">Dijkstra's Algorithm</a></li>
                </ul>
            </section>
            <section className='dropdown-section' >
                <h2>Data Structure</h2>
                <ul>
                    <li><a href="">Linked List</a></li>
                    <li><a href="">Graphs</a></li>
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
            <figure className="nav-image"><img src="../../../public/Logo/site_logo-60x42.png" alt="" /></figure>
            <div className="nav-menu-container" >
                <ul className="nav-list" onClick={toggleListItems}>
                    <li data-nav-id={'home'}><a href="">Home</a></li>   
                    <li data-nav-id={'projects'}><a href="">Projects</a></li>
                    <li data-nav-id={'blog'} className="nav-dropdown-item" ><a>Blog</a><span className='nav-dropdown-icon flip-icon'><IoMdArrowDropdown /></span></li>
                    <li><a href="../../../Data/Resume-Nathan-Ilescas.pdf">Resume</a></li>
                </ul>

                <DropDownMenu/>
            </div>

           <figure className="hamburger-icon" onClick={toggleMenu} >
                <span className="hamburger-bar1"></span>
                <span className="hamburger-bar2"></span>
                <span className="hamburger-bar3"></span>
            </figure>
        </nav>
    )
}

function toggleListItems() {
    document.getElementsByClassName('nav-dropdown-menu')[0].classList.toggle('hide');

}
function toggleMenu() {

    document.getElementsByClassName('hamburger-icon')[0].classList.toggle('change')
    document.getElementsByClassName('nav-menu-container')[0].classList.toggle('slide-menu');
    document.getElementsByClassName('nav-dropdown-menu')[0].classList.add('hide');

}

export default Navigation_1;
