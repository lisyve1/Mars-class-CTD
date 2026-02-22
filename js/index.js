

// new Date() creates a Date object that captures the current date and time from
// the user's system. It gives us access to helper methods like getFullYear().
const date = new Date();

// getFullYear() extracts only the 4-digit year (e.g., 2025) from the Date object.
// Storing it in a variable keeps the copyright year always up-to-date automatically,
// so there is no need to edit the code every January.
const thisYear = date.getFullYear();

// querySelector() searches the document for the first element that matches the
// given CSS selector and returns a reference to it. Here we locate the <footer>
// that already exists in the HTML so we can add content to it from JavaScript.
const footer = document.querySelector('footer');

// createElement() creates a new HTML element in memory but does NOT yet add it to
// the visible page — it just gives us an element we can configure before inserting it.
const copyright = document.createElement('p');

// innerHTML sets the HTML content of an element as a string.
// The backtick syntax (template literal) lets us embed the variable ${thisYear}
// directly inside the string. \u00A9 is the Unicode escape for the © symbol.
copyright.innerHTML = `\u00A9 Lissette Velec ${thisYear}`;

// appendChild() moves an element into the DOM as the last child of the target element,
// making it visible on the page for the first time.
footer.appendChild(copyright);

// textAlign is a CSS property applied as an inline style via JavaScript.
// Setting it on the parent footer centers all text children, including our copyright line.
footer.style.textAlign = 'center';

// An array is an ordered list of values. Here each string is a skill name we want
// to display. Using an array means we can add, remove, or reorder skills in one place
// without touching the HTML at all.
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "React", "Node.js", "SQL"];

// getElementById() finds an element by its unique id attribute. It is faster than
// querySelector() for id lookups and returns null if the id is not found.
const skillsSection = document.getElementById('skills');

// querySelectorAll() returns a NodeList of ALL elements matching the selector, not just
// the first one. Index [1] selects the second <ul> (index 0 is the soft-skills list),
// which is the empty list we want to fill with the technical skills array.
const skillsList = skillsSection.querySelectorAll('ul')[1];

// A DocumentFragment is a lightweight container that exists outside the live DOM tree.
// Building elements inside a fragment first means the browser does not need to
// recalculate the page layout for each item we add — all items are inserted together
// in a single operation at the end, which is much more efficient.
const fragment = document.createDocumentFragment();
skills.forEach((skillName) => {
    // forEach() loops over every item in the array, passing the current item's value
    // (here named skillName) into the callback function on each iteration.
    const skill = document.createElement('li');

    // innerText sets the element's visible text content as a plain string.
    // Unlike innerHTML, it does not parse HTML tags, so it is safer for displaying
    // arbitrary text because it cannot be exploited to inject unwanted markup.
    skill.innerText = skillName;

    // Append each <li> to the fragment (not the live DOM), staging it for bulk insert.
    fragment.appendChild(skill);
});

// Now we attach the entire fragment — with all its child <li> elements — to the live
// DOM in one step. This triggers only a single layout reflow instead of one per skill,
// keeping the page render fast regardless of how many skills are in the array.
skillsList.appendChild(fragment);



