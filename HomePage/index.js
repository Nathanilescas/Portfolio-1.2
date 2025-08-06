const body_container = document.getElementsByTagName("body")[0];
var content_container = document.getElementById("content-container");






body_container.addEventListener("wheel", (event) => {
    var about_section = document.getElementById('info-about-container');
    var experience_section = document.getElementById('info-experience-container');
    var project_section = document.getElementById('info-projects-container');
    if(event.deltaY > 0) {
        content_container.scrollBy(0,400)
        console.log(about_section.getBoundingClientRect().top);


    } else if (event.deltaY < 0) {
        content_container.scrollBy(0, -400)
        console.log(about_section.getBoundingClientRect().top);

    }
})


const nav_items = document.querySelectorAll('nav li a span');

nav_items[0].classList.add("active");


