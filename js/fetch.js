//========= FETCH YOUR GITHUB REPOSITORIES=================//

// Replace this with YOUR GitHub username
const username = "lisyve1";

// Fetch request to GitHub API
fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json()) // convert response to JSON
    .then(data => {
        const repositories = data; // store JSON in variable

        // Get the projects section
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

