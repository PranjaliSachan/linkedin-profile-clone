/**
 * Set Content on Page
 */
const aboutContentText = document.getElementById('about-content-text'); // <p> about content
aboutContentText.innerText = aboutText;

/**
 * We want to get see more button -
 * 
 * 1. document.querySelector(arg) e.g. arg can be:
 *  - class name (ex. '.see-more')
 *  - id (ex. '#about-content-see-more-btn')
 *  - tag name (ex. 'button') note: if there are multiple buttons in html, it will return first match
 * 
 * 2. document.querySelectorAll(arg) same like above, but returns a list of all matches.
 * 
 * 3. document.getElementById(id) e.g. document.getElementById('about-content-see-more-btn');
 * 
 */
const aboutContentSeeMoreBtn = document.getElementById('about-content-see-more-btn');
// const aboutContentText = document.getElementById('about-content-text');

/**
 * EventListeners - click, change, etc. 
 * We need to create a event listener and attach it to our button.
 */
aboutContentSeeMoreBtn.addEventListener(
    'click',
    function ($event) {
        if (aboutContentText.classList.contains('truncate-content')) {
            aboutContentText.classList.remove('truncate-content');
            aboutContentSeeMoreBtn.innerText = 'hide';
        }
        else {
            aboutContentText.classList.add('truncate-content');
            aboutContentSeeMoreBtn.innerText = 'show more';
        }

    }
);

/**
 * <dialog>
 */
const editAboutDialog = document.getElementById('edit-about-dialog'), // edit about dialog reference
    editAboutDialogOpenBtn = document.getElementById('edit-about-dialog-open-btn'), // to open dialog
    editAboutDialogCloseBtn = document.getElementById('edit-about-dialog-close-btn'), // to close dialog
    editAboutDialogSaveBtn = document.getElementById('edit-about-dialog-save-btn'), // to save text box changes
    editAboutTextBox = document.getElementById('edit-about-textbox'); // textarea

editAboutDialogOpenBtn.addEventListener(
    'click',
    function ($event) {
        editAboutDialog.showModal();
    }
);

editAboutDialogCloseBtn.addEventListener(
    'click',
    function ($event) {
        editAboutDialog.close();
    }
);

editAboutTextBox.value = aboutText;

editAboutTextBox.addEventListener(
    'change',
    function ($event) {
        console.log($event.target.value);
    }
)

editAboutDialogSaveBtn.addEventListener(
    'click',
    function ($event) {
        aboutText = editAboutTextBox.value;
        localStorage.setItem('aboutText', aboutText); // this will update the value of aboutText item in localStorage
        //editAboutDialogCloseBtn.click();
        editAboutDialog.close(); // dialog close
        aboutContentText.innerText = aboutText; // update about content text on main page
    }
)

/**
 * Experience, Education, Certifications, Skills Lists
 */
const experienceList = document.getElementById('experience-list'); // <ul> </ul> : parent
for (var i = 0; i < experiences.length; i++) {
    const li = document.createElement('li');    // <li> </li> : child
    li.classList.add('list-item');          // apply li styles using class name
    const template = getExperienceTemplate(experiences[i]); // template string with data
    li.innerHTML = template;                    // convert the template string to HTML
    experienceList.appendChild(li);             // append to parent <ul> </ul> : parent

    // add divider <hr> till (experiences.length - 1)
    if (i < (experiences.length - 1)) {
        const hr = document.createElement('hr');
        experienceList.appendChild(hr);
    }
}

const educationList = document.getElementById('education-list'); // <ul> </ul> : parent
for (var i = 0; i < education.length; i++) {
    const li = document.createElement('li');    // <li> </li> : child
    li.classList.add('list-item');              // apply li styles using class name
    const template = getEducationTemplate(education[i]); // template string with data
    li.innerHTML = template;                    // convert the template string to HTML
    educationList.appendChild(li);              // append to parent <ul> </ul> : parent

    // add divider <hr> till (certifications.length - 1)
    if (i < (education.length - 1)) {
        const hr = document.createElement('hr');
        educationList.appendChild(hr);
    }
}

const certificationsList = document.getElementById('certifications-list'); // <ul> </ul> : parent
for (var i = 0; i < certifications.length; i++) {
    const li = document.createElement('li');    // <li> </li> : child
    li.classList.add('list-item');              // apply li styles using class name
    const template = getCertificationTemplate(certifications[i]); // template string with data
    li.innerHTML = template;                    // convert the template string to HTML
    certificationsList.appendChild(li);         // append to parent <ul> </ul> : parent

    // add divider <hr> till (certifications.length - 1)
    if (i < (certifications.length - 1)) {
        const hr = document.createElement('hr');
        certificationsList.appendChild(hr);
    }
}

const skillsList = document.getElementById('skills-list'); // <ul> </ul> : parent
for (var i = 0; i < skills.length; i++) {
    const li = document.createElement('li');    // <li> </li> : child
    li.classList.add('list-item');              // apply li styles using class name
    const template = getSkillTemplate(skills[i]); // template string with data
    li.innerHTML = template;                    // convert the template string to HTML
    skillsList.appendChild(li);                 // append to parent <ul> </ul> : parent

    // add divider <hr> till (skills.length - 1)
    if (i < (skills.length - 1)) {
        const hr = document.createElement('hr');
        skillsList.appendChild(hr);
    }
}
