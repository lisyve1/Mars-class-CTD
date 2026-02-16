// get body element//
const body = document.body
// footer element//
const footer = document.createElement('footer');
//append footer to body//
body.appendChild(footer);

//date object//
const date = new Date();

//get update year//
const thisYear = date.getFullYear();
// get  current footer element//
// footer = document.querySelector('footer');

//create a new <p> paragraph element//
const copyright = document.createElement('p');

//Set the inner HTML of your copyright element to display your name and the current year
copyright.innerHTML = `&copy; Lissette Velec ${thisYear}`;
//Append the copyright element to the footer//
footer.appendChild(copyright);
//Center the text in the footer//
footer.style.textAlign = 'center';

// Skills section//
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "React", "Node.js", "SQL"];
//console.log("skills ===> ", skills);

//get the skills section//
const skillsSection = document.getElementById('skills');
//console.log("skillsSection ===> ", skillsSection);

//Select the empty ul element in the skills section//
const skillsList = skillsSection.querySelector('ul');

//Loop through the skills array/
for (let i = 0; i < skills.length; i++) {
    //create a li element for each skill//
    const skill = document.createElement('li');
    //set the inner text of the li element to the skill//
    skill.innerText = skills[i];
    //append the li element to the skills list//
    skillsList.appendChild(skill);
}


//==================== Section Form ========================//

//to show/hide a message form//
function toggleMessageSection() {
    const messageSection = document.getElementById('messages');
    const messagesList = messageSection.querySelector('ul');
    if (messagesList.children.length == 0) {
        messageSection.style.display = 'none';
    } else {
        messageSection.style.display = 'block';
    }
}


// click leave message submit button//
const messageForm = document.querySelector("form[name='Leave_Messages']");
console.log("messageForm ===> ", messageForm);

// const htmlElement = document.getElementById('contact');
// htmlElement.addEventListener('click', function () {
//     console.log("hello i'm a click")
// })

//add event listener to the form submit event//
if (messageForm) {
    messageForm.addEventListener('submit', function (event) {
        //prevent the default form submission behavior//
        event.preventDefault();

        //retrive the values from the form fields//

        const userName = event.target.userName.value;
        const userEmail = event.target.userEmail.value;
        const userMessage = event.target.userMessage.value;

        // log filled form values to the console//
        console.log('Name:', userName);
        console.log('Email:', userEmail);
        console.log('Message:', userMessage);

        /// select the messages section//
        const messagesSection = document.getElementById('messages');

        /// select the ul element in the messages section//
        const messagesList = messagesSection.querySelector('ul');

        /// create a new li element to hold the message//
        const newMessage = document.createElement('li');

        //set the inner text of the HTML//
        newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: <span>${userMessage}</span>`;
        console.log("newMessage ===> ", newMessage);

        // create edit button//
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.className = 'edit-button';
        editButton.type = 'button';

        // create remove button//
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.type = 'button';

        // event listener for remove button//
        removeButton.addEventListener('click', function () {
            // find the li//
            const entry = removeButton.parentNode;
            //remove li//
            entry.remove();
            //toggle if there are not more messages//
            toggleMessageSection();
        });

        // add click event listener to the edit button//
        editButton.addEventListener('click', function () {
            const entry = editButton.parentNode;
            const messageText = entry.querySelector('span');
            const newText = prompt('Edit your message:', messageText.innerText);
            if (newText !== null) {
                messageText.innerText = newText;
            }
        });

        //append the edit button to the message item//
        newMessage.appendChild(editButton);

        //append the remove button to the message item//
        newMessage.appendChild(removeButton);

        //append the message item to the messages list//
        messagesList.appendChild(newMessage);

        // toggle the message section visibility//
        toggleMessageSection();

        /// after submit clear the form fields//
        messageForm.reset();

        //========= FETCH YOUR GITHUB REPOSITORIES=================//

        // Replace this with YOUR GitHub username
        const username = "lisyve1";

        // Fetch request to GitHub API
        // `https://api.github.com/users/${username}/repos`
        // converts to this:
        // https://api.github.com/users/lisyve1/repos
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json()) // convert response to JSON
            .then(data => {
                const repositories = data; // store JSON in variable
                console.log("Your repositories:", repositories);
            });
    });
} else {
    console.error("Form not found. Check the form name attribute!");
}