import { createMainContianer } from './info-card-generator.js'

const experience_container = document.getElementById('info-experience-container');

createMainContianer().forEach( element => {
    experience_container.append(element);
})


