

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



