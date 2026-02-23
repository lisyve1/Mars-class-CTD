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
    })
    .catch(error => console.error("Error fetching repositories:", error));

