// get body element//
const body = document.body;
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


//Select the empty ul element in the skills section//

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
const messageForm = document.querySelector("form[name='leave_message']");

//add event listener to the form submit event//
if (messageForm) {
    messageForm.addEventListener('submit', function (event) {
        console.log("event ===> ", event);
        //prevent the default form submission behavior//
        event.preventDefault();

        // retrive the values from the form fields
        // fixing this errors
        const userName = event.target[0].value;
        console.log("userName ===> ", userName);
        console.log("helloooooooooo!!!!");
        console.log("event ===> ", event);
        // const userEmail = event.target.userEmail.value;
        const userEmail = event.target[1].value;

        const userMessage = event.target[2].value;

        /// select the messages section//
        const messagesSection = document.getElementById('messages');

        /// select the ul element in the messages section//
        const messagesList = messagesSection.querySelector('ul');

        /// create a new li element to hold the message//
        const newMessage = document.createElement('li');

        //set the inner text of the HTML//
        newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: <span>${userMessage}</span>`;

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
    });
} else {
    console.error("Form not found. Check the form name attribute!");
}

//========= FETCH YOUR GITHUB REPOSITORIES=================//

// Replace this with YOUR GitHub username
const username = "lisyve1";

// ========= Fetch request to GitHub API========/
fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json()) // convert response to JSON
    .then(data => {
        const repositories = data; // store JSON in variable
        console.log("Fetched repositories:", repositories); // This will log to the respository.

        //=========  the projects section=====//
        const projectsList = document.querySelector('#projects ol');

        // Repositories to exclude from display
        const excludedRepos = ['PromineoTech.Test', 'test', 'test123'];

        // Loop through repositories and add them to the page
        repositories.forEach(repo => {
            // Skip excluded repositories
            if (excludedRepos.includes(repo.name)) {
                return;
            }
            const projectItem = document.createElement('li');
            projectItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || 'No description'}`;
            projectsList.appendChild(projectItem);
        });
    })
    .catch(error => console.error("Error fetching repositories:", error));

const movie_number = 1;
// ========= Fetch request to Star Wars ========/
fetch(`https://www.swapi.tech/api/films/${movie_number}`)
    .then(response => response.json()) // convert response to JSON
    .then(data => {
        console.log("swapi data ===> ", data);
        const movieTitle = document.getElementById('favorite_movie_title');
        const movieDescription = document.getElementById('favorite_movie_description');
        movieTitle.innerText = data.result.properties.title;
        movieDescription.innerText = `Directed by ${data.result.properties.director}`;
    })
    .catch(error => console.error("Error fetching swapi data:", error));

