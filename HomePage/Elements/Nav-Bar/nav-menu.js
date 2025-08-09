const body_container = document.getElementsByTagName("body")[0];
const content_container = document.getElementById("content-container");
const main_container = document.getElementById("main-content-container");
const nav_bar_menu = document.getElementById("nav-bar-menu");




// NAV BAR SLIDE LOGIC
const percent_change = .099;
const x = window.screen.width - 50;
var experience_section = project_section = false;
var set_nav_location = 0;

body_container.addEventListener("wheel", (event) => {

    // FULL-SCROLL ABILITY
    if (event.deltaY > 0) {
        main_container.scrollBy(0, 40);
    } else if (event.deltaY < 0) {
        main_container.scrollBy(0, -40);
    }



    // NAV-BAR MENU SECTION 
    var rect = content_container.getBoundingClientRect();

    var screen_change =  (rect.y - (x * percent_change))

    if (interval(screen_change, 0, -150)) {
        experience_section = false;
        set_nav_location = 0;
    } else if (interval(screen_change, -150, -500)) {
        experience_section = true;
        project_section = false;
        set_nav_location = 1;
    } else if (interval(screen_change, -500, -1200)) {
        project_section = true;
        experience_section = false;
        set_nav_location = 2;
    } else {
        if (!experience_section && !project_section) {
            set_nav_location = 0;
        }
    }

    activeNavItem(set_nav_location)

})

    
function interval(target, lower, higher) {
    return (target < lower && target > higher);
}


function activeNavItem(item) {

    const nav_items =  nav_bar_menu.querySelectorAll("li a span");

    nav_items.forEach((item) => {
        item.classList.remove("active")
    })
    nav_items[item].classList.add("active");
}






























