

//date object//
const date = new Date();

//get update year//
const thisYear = date.getFullYear();
// get current footer element//
const footer = document.querySelector('footer');

//create a new <p> paragraph element//
const copyright = document.createElement('p');

//Set the inner HTML of your copyright element to display your name and the current year
copyright.innerHTML = `\u00A9 Lissette Velec ${thisYear}`;
//Append the copyright element to the footer//
footer.appendChild(copyright);
//Center the text in the footer//
footer.style.textAlign = 'center';

// Skills section//
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "React", "Node.js", "SQL"];

//get the skills section//
const skillsSection = document.getElementById('skills');

//Select the second ul element (technical skills) in the skills section//
const skillsList = skillsSection.querySelectorAll('ul')[1];

//Build all skill items in a fragment before inserting into the DOM//
const fragment = document.createDocumentFragment();
skills.forEach((skillName) => {
    //create a li element for each skill//
    const skill = document.createElement('li');
    //set the inner text of the li element to the skill//
    skill.innerText = skillName;
    //append the li element to the fragment//
    fragment.appendChild(skill);
});
//Append all skills at once to minimize DOM reflows//
skillsList.appendChild(fragment);



