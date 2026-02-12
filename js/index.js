

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
footer = document.querySelector('footer');

//create a new <p> paragraph element//
const copyright = document.createElement('p');

//Set the inner HTML of your copyright element to display your name and the current year
copyright.innerHTML = `\u00A9 Lissette Velec${thisYear}`;
//Appredn the copyright element to the footer//
footer.appendChild(copyright);
//Center the text in the footer//
footer.style.textAlign = 'center';

// Skills section//
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "React", "Node.js", "SQL"];

//get the skills section//
const skillsSection = document.getElementById('skills');

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

//tobleave a message form//
function toggleMessageSection() {
    const messageSection = document.getElementById('Messages');
    const messagesList = messageSection.querySelector('ul');
    if (messagesList.children.length == 0) {
        messageSection.style.display = 'none';
    } else {
        messageSection.style.display = 'block';
    }
}


// click leave message submit button//
const messageForm = document.querySelector("form[name='leave_messages");

//add event listener to the form submit event//
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
    const messagesSection = document.getElementById('Messages');

    /// select the ul element in the messages section//
    const messagesList = messagesSection.querySelector('ul');

    /// create a new li element to hold the message//
    const newMessage = document.createElement('li');

    //set the innner text of the HTML//
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: <span>${userMessage}</span>`;


    // create editing button//
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'edit-button';
    editButton.type = 'button';


    // add click event listener to the edit button//
    editButton.addEventListener('click', function () {
        const entry = editButton.parentNode;
        const messageText = entry.querySelector('span');
        const newTest = prompt('Edit your message:', messagepam.innerText);
        if (newTest !== null) {
            messageText.innerText = newTest;
        }


        //Remove Bottom Creation//
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.type = 'button';

        // event listener for remove button//
        removeButton.addEventListener('click', function () {

            // find the li//
            const entry = removeButton.parentNode;
            //remove  li//
            entry.remove();
        });
        // toggle if there are not more messages//
        toggleMessageSection();


        // Remove the li from the messages list//
        entrysList.removeChild(li);

        //append the remove button to the message item//
        newMessage.appendChild(removeButton);

        //append the message item to the messages list//
        messagesList.appendChild(newMessageItem);

        // toggle the message section visibility//
        toggleMessageSection();


        /// afer submit clear the form fields//
        messageForm.reset();



    });
