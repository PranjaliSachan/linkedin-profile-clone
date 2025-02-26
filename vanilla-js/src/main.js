/**
 * Globals (In memory) AND &&, OR ||, NOT !
 */
var aboutText; // declaration - value is not assigned to variable
if (!(localStorage.getItem('aboutText'))) { // if aboutText is not there in localStorage
    aboutText = "Currently pursuing a Master's in Information Technology from Franklin University, specializing in Frontend Development, Cybersecurity, and Project Management. Skilled in front end UI development using vanilla JavaScript, Angular, React, Bootstrap, Tailwind CSS, and more for crafting seamless user experiences. I thrive on creating dynamic and secure web applications while adhering to industry best practices. I am committed to safeguarding digital assets and user data through robust cybersecurity measures. Experienced in penetration testing, network troubleshooting, and implementing security protocols. Equipped with project management expertise, adept at coordinating recruitment projects, optimizing workflows, and driving continuous improvement initiatives. Let's connect and explore opportunities to collaborate!";
    localStorage.setItem('aboutText', aboutText);
} else {
    aboutText = localStorage.getItem('aboutText');
}
/**
 * LocalStorage | SessionStorage (In Browser - kind of permanent, no guarantee)
 * 
 * Item : { key: value }
 */


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