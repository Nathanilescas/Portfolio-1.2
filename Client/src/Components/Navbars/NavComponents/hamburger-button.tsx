import './hamburger-button.css'


export default function HamburgerButton({toggleMenu, closeListItems}) {
    function toggleHamburger() {
        document.getElementsByClassName('hamburger-icon')[0].classList.toggle('change');
        toggleMenu();
        closeListItems();
    }

    return (
        <figure className="hamburger-icon" onClick={() => toggleHamburger()} >
            <span className="hamburger-bar1"></span>
            <span className="hamburger-bar2"></span>
            <span className="hamburger-bar3"></span>
        </figure>
    )
}
