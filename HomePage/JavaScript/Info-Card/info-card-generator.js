import { card_experience } from '../../../Protfolio-Data/Experience.js'

function createMainContianer() {

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('info-card');

    const experienceData =  getCardInfo(card_experience);

    experienceData.forEach( element => {
        const headerElement = generatorHeader(element.employer, element.title)
        console.log(element)
        console.log(element.date);
        console.log(element.description);

        element.skills.forEach( skill => {

            console.log(skill)
        })

    })


}

function getCardInfo(data) {
    if (data) { return data }
    else {
        console.warn("card_experience data is null or undefined.");
    }
    return [];
}














// MAIN - INFO CARD SECTION GENERATOR
function generatorInfoCardText() {
    const mainInfoCardContainer = createTextSection();

    const info_card_section = []
    info_card_section.push(generatorHeader());
    info_card_section.push(createTimeText());
    info_card_section.push(createDescription());
    
    info_card_section.forEach(element => {
        mainInfoCardContainer.append(element)
    });

    return mainInfoCardContainer;
}

// TEXT SECTION
function createTextSection() {
    const textSection = document.createElement('div');
    textSection.classList.add('info-card-text');

    return textSection;
}





// HEADER
function generatorHeader(employer_data, title_data) {
    const header = createHeaderSection();
    const innerElements = [];

    innerElements.push(createEmployerText(employer_data))
    innerElements.push(createDash());
    innerElements.push(createTitleText(title_data));
    // innerElements.push(createArrowIcon());

    innerElements.forEach(element => {
        header.append(element)
    });

    return header;
}

function createHeaderSection() {
    const headerSection = document.createElement('span');
    headerSection.classList.add('info-card-header');

    return headerSection;
}

function createEmployerText(employer_data) {
    const employerText = document.createElement('h3');
    employerText.classList.add('info-card-header-employer');

    employerText.textContent = employer_data;

    return employerText;
}

function createDash() {
    const dash = document.createElement('span');
    dash.classList.add('info-card-header-separator');

    return dash;
}

function createTitleText(title_data) {
    const titleText = document.createElement('h3');
    titleText.classList.add('info-card-header-title');

    titleText.textContent = title_data;

    return titleText;
}

function createArrowIcon() {
    // create one
}

// TIME
function createTimeText(time_data_text, time_meta_data) {
    const timeText = document.createElement('time');
    timeText.classList.add('info-card-date')

    timeText.textContent = time_data_text;
    timeText.setAttribute('datetime', time_meta_data);

    return timeText;
}

// DESCRIPTION
function createDescription(description_data) {
    const descriptionText = document.createElement('p');
    descriptionText.classList.add('info-card-description');

    descriptionText.textContent = description_data;
    return descriptionText;
}




// MAIN - SKILL SECTION
function generateSkills(skillList) {
    const mainSkillContainer = createSkillSection();
    mainSkillContainer.append(createSkillList(skillList));

    return mainSkillContainer;
}

function createSkillSection() {
    const skillSection = document.createElement('div');
    return skillSection.classList.add('info-card-skill');
}
function createSkillList(skillList) {
    const skillOrderedList = document.createElement('ol');

    skillList.forEach( element => {

        let skillItem = document.createElement('li');
        let skillText = document.createElement('h4');

        skillText.textContent = element;

        skillOrderedList.append(skillItem.append(skillText));
    })

    return skillOrderedList;
}

export { createMainContianer };