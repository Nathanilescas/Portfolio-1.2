import { card_experience } from '../../../Protfolio-Data/Experience.js'

function createMainContianer() {
    const cards = [];
    const experienceData =  getCardInfo(card_experience);

    experienceData.forEach( element => {
        let  mainContainer = document.createElement('div');
        mainContainer.classList.add('info-card');

        const mainInfoCardText =  generatorInfoCardText(element.employer, element.title, element.date, element.description);
        const mainSkills = generateSkills(element.skills);

        mainContainer.append(mainInfoCardText);
        mainContainer.append(mainSkills);

        cards.push(mainContainer);
    })  
    
    return cards;
}

function getCardInfo(data) {
    if (data) { return data }
    else {
        console.warn("card_experience data is null or undefined.");
    }
    return [];
}














// MAIN - INFO CARD SECTION GENERATOR
function generatorInfoCardText(employer_data, title_data, date_data, description_data) {
    const mainInfoCardContainer = createTextSection();

    const info_card_section = []
    info_card_section.push(generatorHeader(employer_data, title_data));
    info_card_section.push(createTimeText(date_data));
    info_card_section.push(createDescription(description_data));
    
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
function createTimeText(time_data_text) {
    const timeText = document.createElement('time');
    timeText.classList.add('info-card-date')

    timeText.textContent = time_data_text;
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
    skillSection.classList.add('info-card-skill');

    return skillSection;
}
function createSkillList(skillList) {

    const skillOrderedList = document.createElement('ol');

    skillList.forEach( element => {
        let skillItem = document.createElement('li');
        let skillText = document.createElement('h4');

        skillText.textContent = element;

        skillItem.append(skillText)
        skillOrderedList.append(skillItem);
    })

    return skillOrderedList;
}

export { createMainContianer };