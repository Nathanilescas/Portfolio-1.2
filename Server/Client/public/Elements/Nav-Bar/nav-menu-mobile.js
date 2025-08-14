


const about_section = document.getElementById("content-container");
const exp_section = document.getElementById("experience");
const proj_section = document.getElementById("project");

const home_section = document.getElementsByClassName('secondary-container');
const header_section = home_section[0].querySelector('header');
const social_media_li = home_section[0].getElementsByClassName('social-media')[0];

const all_page_section = [about_section, exp_section, proj_section, header_section, social_media_li]

var nav_menu_li = document.getElementById("nav-bar-menu")


/*0 = about page, 1 = experience page, 2 = project page */
var active_pages = {
    "About": false,
    "Experience": false,
    "Projects": false
};

nav_menu_li = nav_menu_li.querySelectorAll('li');


if (window.matchMedia('(max-width: 450px)').matches) {
    nav_menu_li.forEach(element => {
        element.addEventListener('click', () => {
            var result = element.querySelector('a');
            active_pages[result.textContent] = !active_pages[result.textContent];

            for(const key in active_pages) {
                if(key != result.textContent) {
                    active_pages[key] = false;
                }
            }        
            pageRenderer(active_pages);
            activePage(active_pages)
        })
    });
}



function pageRenderer(pages) {
    var pageName = Object.keys(pages).find(key => pages[key] === true);
    removePages();
    renderPage(pageName)

}


function removePages() {
    all_page_section.forEach(element => {
        element.style.display = "none";
    })
}
function renderPage(page) {
    switch(page) {
        case "About": about_section.style.display = "flex";
            break;
        case "Experience": exp_section.style.display = "flex";
            break;
        case "Projects": proj_section.style.display = "block";
            break;
        default:   
            headerSection();
            
            break;
    }


}


function headerSection() {
    social_media_li.style.display = "block"
    header_section.style.display = "flex"
}
function activePage(currentPage) {
        nav_menu_li.forEach(element => {
        element.classList.remove('active');
    })
    var result = Object.keys(currentPage).find(key => currentPage[key] === true);


    switch(result) {
        case "About": nav_menu_li[0].classList.add('active');
            break;
        case "Experience": nav_menu_li[1].classList.add('active');
            break;
        case "Projects": nav_menu_li[2].classList.add('active');
            break;
        default:   
            nav_menu_li.forEach(element => {
                element.classList.remove('active');
            })
            
            break;
    }
}


headerSection();